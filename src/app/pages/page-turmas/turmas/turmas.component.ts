import { ToastService } from 'angular-toastify';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TurmaService } from './../turma/turma.service';
import { Component, Input, OnInit, TemplateRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Turma } from '../turma/turma';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent implements OnInit, OnChanges {

  @Input() turmas!: Turma[];
  @Input() search: string = '';
  @Input() page: number = 1;
  turma!: Turma;

  hideProgressBar = false;

  @ViewChild('modalDelete', { static: true }) modalDelete!: TemplateRef<any>
  @ViewChild('modalUpdate', { static: true }) modalUpdate!: TemplateRef<any>

  constructor(
    private turmaService: TurmaService,
    private modalService: BsModalService,
    private _toastService: ToastService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['turmas']?.currentValue) {
      this.turmas = changes['turmas'].currentValue
    }
    if(changes['page']?.currentValue) {
      this.page = changes['page'].currentValue
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.show(template);
  }

  OpenModalUdpdate(id: number){
    this.turmaService.pegaTurmaPorId(id).subscribe(
      (turma) => {
        this.turma = turma;
        this.openModal(this.modalUpdate)
      }
    )
  }

  turmaAtualizada(turma: Turma) {
    this.turmaService.listar('', this.page).subscribe((turmas)=> {
      this.turmas = turmas.turmas;
      this.modalService.hide();
    })
  }

  OpenModalDelete(id: number){
    this.turmaService.pegaTurmaPorId(id).subscribe(
      (turma) => {
        this.turma = turma;
        this.openModal(this.modalDelete)
      }
    )
  }

  onClose(){
    this.modalService.hide();
  }

  excluir(){
    const id = this.turma.id ?? 0
    this.turmaService.excluir(id).subscribe((mensagem: any) => {
      this._toastService.success(mensagem[0].message)
      return this.turmaService.listar("", this.page).subscribe((turmas) => {
        this.turmas = turmas.turmas;
      })
    });
    this.onClose();
  }

}
