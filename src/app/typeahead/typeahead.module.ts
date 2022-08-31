import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TypeaheadComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ReactiveFormsModule
  ],exports:[TypeaheadComponent]
})
export class TypeaheadModule { }
