import { ToastService } from 'angular-toastify';
import { tap } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalService } from '../local/local.service';
import { Local } from '../local/local';

@Component({
  selector: 'app-local-form',
  templateUrl: './local-form.component.html',
  styleUrls: ['./local-form.component.scss']
})
export class LocalFormComponent implements OnInit {

  @Input() tituloModal: string = "Cadastro de Local";
  @Input() local: Local = {};
  @Output() idLocal = new EventEmitter<Local>();

  formLocal!: FormGroup

  hideProgressBar = false;

  constructor(
    private formBuilder: FormBuilder,
    private localService: LocalService,
    private _toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.formLocal = this.formBuilder.group({
      nome: [this.local?.nome, [Validators.required]],
      capacidade: [this.local?.capacidade, [Validators.required]],
      sistemas: [ this.local?.sistemas, [Validators.required]]
    })
  }

  enviar(){
    const local = this.formLocal.getRawValue() as Local;
    local.sistemas = local.sistemas == 'true' ? true : false

    if(this.local.id){
      this.localService.atualizar(this.local.id, local)
      .subscribe((local) =>{
        this._toastService.success(`Local atualizado com sucesso!`)
        this.idLocal.emit(local);
      })
    }else{
      this.localService.adicionar(local).subscribe(local => {
        this._toastService.success(`${local.nome} adicionado com sucesso!`)
        this.idLocal.emit(local)
      })
    }
  }

}
