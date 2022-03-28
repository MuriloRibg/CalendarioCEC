import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, OnChanges, SimpleChanges, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap} from 'rxjs';

import { Reserva } from 'src/app/core/reserva/reserva';
import { Instrutor } from 'src/app/pages/page-instrutores/instrutor/instrutor';
import { Turma } from 'src/app/pages/page-turmas/turma/turma';
import { Disciplina } from 'src/app/pages/page-disciplinas/disciplina/disciplina';
import { Local } from 'src/app/pages/page-locais/local/local';
import { ReservaService } from 'src/app/core/reserva/reserva.service';
import { LocalService } from './../../pages/page-locais/local/local.service';
import { InstrutorService } from 'src/app/pages/page-instrutores/instrutor/instrutor.service';
import { TurmaService } from 'src/app/pages/page-turmas/turma/turma.service';
import { DisciplinaService } from 'src/app/pages/page-disciplinas/disciplina/disciplina.service';
import { ToastService } from 'angular-toastify';
import { ConvertDay, ConvertHour } from 'src/app/shared/helpers/conevert-day';

@Component({
  selector: 'app-cadastro-reserva',
  templateUrl: './cadastro-reserva.component.html',
  styleUrls: ['./cadastro-reserva.component.scss'],
})
export class CadastroReservaComponent implements OnInit{
  @ViewChild('modalReserva') modalReserva!: ElementRef<any>;
  @ViewChild('selectDisciplinas') selectDisciplinas!: ElementRef<HTMLInputElement>;
  @ViewChild('selectInstrutores') selectInstrutores!: ElementRef<HTMLInputElement>;
  @ViewChild('selectLocal') selectLocal!: ElementRef<HTMLInputElement>;

  @Output() reservas = new EventEmitter<Date>();
  @Output() closeModal = new EventEmitter();

  @Input() tituloModal: string = 'Adicionar Reserva';
  @Input() reserva!: Reserva;
  formReserva!: FormGroup;

  @Input() instrutores!: Instrutor[];
  @Input() turmas!: Turma[];
  @Input() disciplinas!: Disciplina[];
  @Input() locais!: Local[];
  hideProgressBar = false;
  disabilitado = true

  tipoEvento: string = "Aula";

  constructor(
    private reservaService: ReservaService,
    private instrutorService: InstrutorService,
    private turmaService: TurmaService,
    private disciplinaService: DisciplinaService,
    private localService: LocalService,
    private formBuilder: FormBuilder,
    private _toastService: ToastService,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    const dataInicio = ConvertDay(new Date(this.reserva?.dataInicio ?? new Date()));
    const horaInicio = ConvertHour(new Date(this.reserva?.horaInicio))
    const horaFim = ConvertHour(new Date(this.reserva?.horaFim))

    let local = this.reserva?.local?.id
    let instrutor;
    let turma;
    let disciplina;

    if(this.turmas?.length == 1) {
      turma = this.turmas[0].id ?? 0
      this.pegaPorPilar(turma, undefined)
    }

    console.log(this.reserva);

    if(this.reserva?.aula){
      this.localService.listar().subscribe((responseLocal) => (this.locais = responseLocal.locais));

      this.tipoEvento = "Aula"
      instrutor = this.reserva?.aula?.instrutor?.id ?? null;
      turma = this.reserva?.aula?.turma?.id ?? 0;
      disciplina = this.reserva?.aula?.disciplina?.id ?? null;
      this.pegaPorPilar(turma, local);
    }else if(this.reserva?.evento){      
      this.tipoEvento = "Evento"
      instrutor = this.reserva?.evento?.instrutor?.id ?? 0

      this.disabilitado = false;
      this.instrutorService.listar()
        .pipe(
          switchMap((instrutores) => {
            this.instrutores = instrutores.instrutores
            return this.localService.listar();
          }
        )
      )
      .subscribe((locais) => {
        this.locais = locais.locais
      })
    }

    this.formReserva = this.formBuilder.group({
      titulo: [this.reserva?.titulo, Validators.required],
      id_instrutor: [{ value: instrutor ?? null, disabled: this.disabilitado }, Validators.required],
      id_local: [{ value: local ?? null, disabled: this.disabilitado }, Validators.required],
      tipoEvento: [this.tipoEvento],
      dataInicio: [dataInicio, Validators.required],
      dataFim: [''],
      horaInicio: [horaInicio ?? '', Validators.required],
      horaFim: [horaFim ?? '', Validators.required],
      descricao: [this.reserva?.descricao],
      id_disciplina: [{ value: disciplina ?? null, disabled: true },Validators.required],
      id_turma: [turma ?? null, Validators.required],
    });

    console.log(turma);

    if(this.tipoEvento == "Evento"){
      this.mudaValoresEvento();
    }
  }

  modalEvento(){
    this.mudaValoresEvento();

    this.formReserva.controls["id_local"].setValue(null);

    this.formReserva.controls["id_instrutor"].setValue(null);

    this.selectInstrutores.nativeElement.disabled = false;
    this.selectLocal.nativeElement.disabled = false;

    this.instrutorService.listar()
        .pipe(
          switchMap((instrutores) => {
            this.instrutores = instrutores.instrutores
            return this.localService.listar();
          }
        )
      )
      .subscribe((locais) => {
        this.locais = locais.locais
      })
  }

  modalAula(){
    this.formReserva.controls["id_turma"].setValidators([Validators.required]);
    this.formReserva.controls["id_turma"].setValue(null);
    this.formReserva.controls["id_turma"].updateValueAndValidity();

    this.formReserva.controls["id_disciplina"].setValidators([Validators.required]);
    this.formReserva.controls["id_disciplina"].setValue(null);
    this.formReserva.controls["id_disciplina"].updateValueAndValidity();

    this.formReserva.controls["id_local"].setValue(null);

    this.formReserva.controls['descricao'].setValidators([])
    this.formReserva.controls['descricao'].updateValueAndValidity();

    this.formReserva.controls["id_instrutor"].setValue(null);

    this.selectInstrutores.nativeElement.disabled = true;
    this.selectLocal.nativeElement.disabled = true;
  }

  //Bug ao trocar a turma no modal de adicionar reserva!
  pegaPorPilar(idTurma: number, idlocal?: number) {
    let pilar: string;
    let qtd_alunos: number;

    this.turmaService
      .pegaTurmaPorId(idTurma)
      .pipe(
        switchMap((turma) => {
          pilar = turma.pilar?.nomePilar ?? '';
          qtd_alunos = turma.quant_alunos ?? 0;
          return this.instrutorService.listarPorPilar(pilar);
        }),
        switchMap((instrutores) => {
          this.instrutores = instrutores;
          return this.disciplinaService.listarPorPilar(pilar);
        }),
        switchMap(disciplinas => {
          this.disciplinas = disciplinas;
          return this.localService.listarPorQuantidade(qtd_alunos)
        })
      )
      .subscribe((locais) => {
        if(idlocal == undefined){
          this.locais = locais
        }

        if(!this.reserva){
          this.formReserva.controls["id_disciplina"].setValue(null);
          this.formReserva.controls["id_instrutor"].setValue(null);
        }

        this.selectInstrutores.nativeElement.disabled = false;
        this.selectLocal.nativeElement.disabled = false;
        this.selectDisciplinas.nativeElement.disabled = false;
      });
  }


  enviar(): void {
    const reserva = this.formReserva.getRawValue();

    reserva.Id_Aula = this.reserva?.aula?.id ?? 0;
    reserva.Id_Evento = this.reserva?.evento?.id ?? 0;

    const data = reserva.dataInicio;
    
    
    if(this.reserva?.evento || reserva.tipoEvento == "Evento"){
      delete reserva.id_disciplina;
      delete reserva.id_turma;
    }

    console.log(this.reserva);
    console.log(reserva);

    if(this.reserva?.id){
      this.reservaService.atualizaReserva(this.reserva.id, reserva).subscribe((r) => {
        this.reservas.emit(data);
      },
      err => {
        console.log(err);
        
        const erros: any[] = err.error
        erros.forEach(erro => {
          this._toastService.error(erro.message);
        });
      })
    }else{
      this.reservaService
      .adicionaReserva(reserva).subscribe(() => {
        this.reservas.emit(data);
      }, err => {
        console.log(err);
        const erros: any[] = err.error
        erros.forEach(erro => {
          this._toastService.error(erro.message);
        });
      })
    }
  }

  onClose(event: any){
    this.closeModal.emit(event);
  }

  private mudaValoresEvento(){
    this.formReserva.controls["id_turma"].setValidators([]);
    this.formReserva.controls["id_turma"].setValue(null);
    this.formReserva.controls["id_turma"].updateValueAndValidity();

    this.formReserva.controls["id_disciplina"].setValidators([]);
    this.formReserva.controls["id_disciplina"].setValue(null);
    this.formReserva.controls["id_disciplina"].updateValueAndValidity();
  }
}
