import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglerepoComponent } from './components/singlerepo/singlerepo.component';
import { SingleRepoRoutingModule } from './singlerepo-routing.module';



@NgModule({
  declarations: [
    SinglerepoComponent
  ],
  imports: [
    CommonModule,
    SingleRepoRoutingModule
  ]
})
export class SinglerepoModule { }
