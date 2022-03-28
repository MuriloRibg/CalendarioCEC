import { ToastService } from 'angular-toastify';
import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { switchMap, tap } from 'rxjs';

import { Instrutor } from '../instrutor/instrutor';
import { InstrutorService } from '../instrutor/instrutor.service';

@Component({
  selector: 'app-instrutores',
  templateUrl: './instrutores.component.html',
  styleUrls: ['./instrutores.component.scss'],
})
export class InstrutoresComponent implements OnInit, OnChanges {

  @Input() instrutores!: Instrutor[];
  @Input() page: number = 1;
  instrutor!: Instrutor;

  hideProgressBar = false;

  @ViewChild('modalDelete', { static: true }) modalDelete!: TemplateRef<any>;
  @ViewChild('modalUpdate', { static: true }) modalUpdate!: TemplateRef<any>;

  constructor(
    private instrutorService: InstrutorService,
    private modalService: BsModalService,
    private _toastService: ToastService
  ) {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['instrutores']?.currentValue){
      this.instrutores = changes['instrutores'].currentValue
    }
    if(changes['page']?.currentValue){
      this.page = changes['page'].currentValue;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalService.show(template);
  }

  OpenModalUdpdate(id: number) {
    this.instrutorService.pegaInstrutorPorId(id).subscribe((instrutor) => {
      this.instrutor = instrutor;
      this.openModal(this.modalUpdate);
    });
  }

  OpenModalDelete(id: number) {
    this.instrutorService.pegaInstrutorPorId(id).subscribe((instrutor) => {
      this.instrutor = instrutor;
      this.openModal(this.modalDelete);
    });
  }

  instrutorAtualizado(instrutor: Instrutor) {
    this.instrutorService.listar('', this.page).subscribe((instrutores)=> {
      this.instrutores = instrutores.instrutores;
      this.modalService.hide();
    })
  }

  onClose() {
    this.modalService.hide();
  }

  excluir() {
    const id = this.instrutor.id ?? 0;
    this.instrutorService.excluir(id).pipe(
      switchMap((mensagem: any) => {
        this._toastService.success(mensagem[0].message)
        return this.instrutorService.listar('', 1)
      }),
      tap(() => this.onClose())
    ).subscribe((instrutores) => {
      this.instrutores = instrutores.instrutores
    })
  }
}
