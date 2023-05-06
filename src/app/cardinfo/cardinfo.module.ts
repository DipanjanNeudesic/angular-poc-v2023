import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { CardRoutingModule } from './cardinfo-routing.module';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CardRoutingModule
  ]
})
export class CardinfoModule { }
