import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatTabsModule} from '@angular/material/tabs'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatCardModule} from '@angular/material/card'

const materialComponents = [
  MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,MatAutocompleteModule,
  MatTabsModule,MatToolbarModule,MatTooltipModule,MatExpansionModule,MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialComponents
  ],
  exports:[...materialComponents]
})
export class MaterialComponentsModule { }
