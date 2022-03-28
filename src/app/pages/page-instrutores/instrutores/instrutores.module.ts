import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormModalModule } from "src/app/shared/components/form-modal/form-modal.module";
import { InstrutorFormModule } from "../instrutor-form/instrutor-form.module";
import { InstrutorModule } from "../instrutor/instrutor.module";
import { InstrutoresComponent } from "./instrutores.component";

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HttpClientModule } from "@angular/common/http";
import { AngularToastifyModule } from 'angular-toastify';

@NgModule({
    declarations: [ InstrutoresComponent ],
    imports: [
        CommonModule,
        FormModalModule,
        InstrutorFormModule,
        InstrutorModule,
        PaginationModule,
        HttpClientModule,
        AngularToastifyModule
    ],
    exports: [ InstrutoresComponent ]
})
export class InstrutoresModule {}
