import { ToastService } from 'angular-toastify';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Local } from './local/local';
import { LocalService } from './local/local.service';

@Component({
  selector: 'app-page-locais',
  templateUrl: './page-locais.component.html',
  styleUrls: ['./page-locais.component.scss']
})
export class PageLocaisComponent implements OnInit {

  titulo: string = 'Local';
  id!: number;
  filter: string= '';
  modalRef?: BsModalRef;
  locais!: Local[];

  page: number = 1;
  totalItems = 0;
  itemsPerPage = 6;
  maxSize = 3;
  rotate = true;

  hideProgressBar = false;

  constructor(
    private localService: LocalService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.localService.listar('', this.page).subscribe((Responselocais) => {
      this.locais = Responselocais.locais;
      this.totalItems = Responselocais.qtdTotalLocais;
    })
  }

  pageChanged(event: PageChangedEvent): void {
    this.localService.listar(this.filter, event.page).subscribe(responseLocal => {
      this.locais = responseLocal.locais;
      this.page = event.page;
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  pegaId(id: number){
    this.id = id;
  }

  localAdicionado(local: Local){
    if(local){
      this.localService.listar(local.nome, 0).subscribe((Responselocais) => {
        this.locais = Responselocais.locais;
        this.totalItems = 1
      })
    }
    this.modalService.hide();
  }

  pesquisa(pesquisa: string) {
    this.filter = pesquisa
    this.localService.listar(pesquisa, 1)
      .subscribe(
        responseLocal => {
          this.locais = responseLocal.locais
          this.totalItems = responseLocal.qtdTotalLocais
        },
        err => console.log(err)
      )
  }
}
