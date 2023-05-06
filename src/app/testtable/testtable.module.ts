import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerowComponent } from './components/tablerow/tablerow.component';
import { CollapsibletableComponent } from './components/collapsibletable/collapsibletable.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';  
import {MatButtonModule} from '@angular/material/button';
import { TestTableRoutingModule } from './testtable-routing.module';
import {MatSortModule} from '@angular/material/sort'; 



@NgModule({
  declarations: [
    TablerowComponent,
    CollapsibletableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
   TestTableRoutingModule
  ],
  exports: [CollapsibletableComponent]
})
export class TesttableModule { }
