import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglerepopageComponent } from './component/singlerepopage/singlerepopage.component';
import { SingleRepoPageRoutingModule } from './singlerepopage-routing.module';



@NgModule({
  declarations: [
    SinglerepopageComponent
  ],
  imports: [
    CommonModule,
    SingleRepoPageRoutingModule
  ]
})
export class SinglerepopageModule { }
