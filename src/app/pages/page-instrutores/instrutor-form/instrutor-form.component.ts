import { EmailInstrutorValidationService } from './email-instrutor.validator.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PilarService } from 'src/app/core/pilar/pilar.service';
import { Instrutor } from '../instrutor/instrutor';
import { InstrutorService } from '../instrutor/instrutor.service';
import { ToastService} from 'angular-toastify';


@Component({
  selector: 'app-instrutor-form',
  templateUrl: './instrutor-form.component.html',
  styleUrls: ['./instrutor-form.component.scss']
})
export class InstrutorFormComponent implements OnInit {

  @Output() idInstrutor = new EventEmitter();
  @Input() tituloModal: string = "Cadastro de Instrutor";
  @Input() instrutor: Instrutor = {};
  pilares$!: Observable<string[]>;
  formInstrutor!: FormGroup;
  hideProgressBar = false

  constructor(
    private formBuilder: FormBuilder,
    private instrutorService: InstrutorService,
    private pilarService: PilarService,
    private validacaoService: EmailInstrutorValidationService,
    private _toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.pilares$ = this.pilarService.listaPilares();

    this.formInstrutor = this.formBuilder.group({
      nome: [this.instrutor.nome, [Validators.required]],
      email: [this.instrutor.email, [Validators.required], [this.validacaoService.checarEmailInstrutor()]],
      abreviacao: [ this.instrutor.abreviacao, [Validators.required]],
      pilar: [this.instrutor.pilar, [Validators.required]],
      disponibilidade: [this.instrutor.disponibilidade, [Validators.required]],
    })
  }

  enviar(){
    const instrutor = this.formInstrutor.getRawValue() as Instrutor

    if(this.instrutor.id){
      this.instrutorService.atualizar(this.instrutor.id, instrutor)
        .subscribe((instrutor) => {
          this._toastService.success(`Instrutor atualizado com sucesso!`);
          this.idInstrutor.emit(instrutor)
        });
    }else{
      this.instrutorService.adicionar(instrutor)
        .subscribe(instrutor => {
          this._toastService.success(`Instrutor ${instrutor.abreviacao} adiciodo(a) com sucesso!`);
          this.idInstrutor.emit(instrutor);
        }, err => {
          const erros: any[] = err.error
          erros.forEach(erro => {
            this._toastService.error(erro.message);
          });
        })
    }
  }
}
