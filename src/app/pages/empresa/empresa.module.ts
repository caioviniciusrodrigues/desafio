import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { ComponentSharedModule } from '../component-shared/component-shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpresaFormComponent,
    EmpresaListComponent
  ],
  exports: [
    EmpresaFormComponent,
    EmpresaListComponent
  ],
  imports: [
    CommonModule,
    ComponentSharedModule,
    ReactiveFormsModule,
    FormsModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
