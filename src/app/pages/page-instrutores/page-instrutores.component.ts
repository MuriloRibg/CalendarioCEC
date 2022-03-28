import { ToastService } from 'angular-toastify';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Instrutor } from './instrutor/instrutor';
import { InstrutorService } from './instrutor/instrutor.service';

@Component({
  selector: 'app-page-instrutores',
  templateUrl: './page-instrutores.component.html',
  styleUrls: ['./page-instrutores.component.scss']
})
export class PageInstrutoresComponent implements OnInit {

  titulo: string = 'Instrutor'
  id!: number
  filter: string= '';
  modalRef?: BsModalRef;
  instrutores!: Instrutor[];

  page: number = 1;
  totalItems = 0;
  itemsPerPage = 6;
  maxSize = 3;
  rotate = true;

  hideProgressBar = false

  constructor(
    private modalService: BsModalService,
    private instrutorService: InstrutorService,
  ) { }

  ngOnInit(): void {
    this.instrutorService.listar('', this.page).subscribe(instrutores => {
      this.instrutores = instrutores.instrutores;
      this.totalItems = instrutores.qtdTotalInstrutores;
    });
  }

  pageChanged(event: PageChangedEvent): void {
    this.instrutorService.listar(this.filter, event.page).subscribe(instrutores => {
      this.instrutores = instrutores.instrutores;
      this.page = event.page;
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pegaId(id: number){
    this.id = id;
  }

  instrutorAdicionado(instrutor: Instrutor){
    if(instrutor){
      this.instrutorService.listar(instrutor.nome, 1).subscribe(instrutores => {
        this.instrutores = instrutores.instrutores
        this.totalItems = 1;
      })
    }
    this.modalService.hide();
  }

  pesquisa(pesquisa: string) {
    this.filter = pesquisa
    this.instrutorService.listar(pesquisa, 1)
      .subscribe(
        instrutores => {
          this.instrutores = instrutores.instrutores
          this.totalItems = instrutores.qtdTotalInstrutores
        },
        err => console.log(err)
      )
  }
}
