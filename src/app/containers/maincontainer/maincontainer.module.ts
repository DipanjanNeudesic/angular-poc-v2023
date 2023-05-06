import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';
import { SearchbarModule } from 'src/app/searchbar/searchbar.module';
import { SearchbarComponent } from 'src/app/searchbar/components/searchbar/searchbar.component';
import { MainContainerRoutingModule } from './maincontainer-routing.module';



@NgModule({
  declarations: [
    MaincontainerComponent
  ],
  imports: [
    CommonModule,
    MainContainerRoutingModule,
    SearchbarModule
  ],
  exports:[
    MaincontainerComponent
  ]
})
export class MaincontainerModule { }
