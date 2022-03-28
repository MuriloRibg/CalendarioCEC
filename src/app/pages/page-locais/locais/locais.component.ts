import { ToastService } from 'angular-toastify';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocalService } from './../local/local.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Local } from '../local/local';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-locais',
  templateUrl: './locais.component.html',
  styleUrls: ['./locais.component.scss'],
})
export class LocaisComponent implements OnInit, OnChanges {
  @Input() locais!: Local[];
  @Input() page: number = 1;
  local!: Local;

  hideProgressBar = false;

  @ViewChild('modalDelete', { static: true }) modalDelete!: TemplateRef<any>;
  @ViewChild('modalUpdate', { static: true }) modalUpdate!: TemplateRef<any>;

  constructor(
    private localService: LocalService,
    private modalService: BsModalService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['locais']?.currentValue) {
      this.locais = changes['locais'].currentValue;
    }
    if (changes['page']?.currentValue) {
      this.page = changes['page'].currentValue;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.show(template);
  }

  OpenModalUdpdate(local: Local) {
    this.local = local;
    this.openModal(this.modalUpdate);
  }

  OpenModalDelete(local: Local) {
    this.local = local;
    this.openModal(this.modalDelete);
  }

  localAtualizado(local: Local) {
    this.localService.listar('', this.page).subscribe((reponseLocal) => {
      this.locais = reponseLocal.locais;
      this.modalService.hide();
    });
  }

  onClose() {
    this.modalService.hide();
  }

  excluir() {
    const id = this.local.id ?? 0;
    this.localService
      .excluir(id)
      .pipe(
        switchMap(mensagem => {
          this._toastService.success("Local arquivado com sucesso!")
          return this.localService.listar('', 1);
        }),
        tap(() => this.onClose())
      )
      .subscribe((responseLocal) => {
        this.locais = responseLocal.locais;
      });
  }
}
