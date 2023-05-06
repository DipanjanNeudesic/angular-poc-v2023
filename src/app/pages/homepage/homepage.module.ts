import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomePageRoutingModule } from './homepagerouting.module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports:[
    HomepageComponent
  ]
})
export class HomepageModule { }
