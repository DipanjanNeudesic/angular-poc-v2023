import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollapsibletableComponent } from './components/collapsibletable/collapsibletable.component';

const routes: Routes = [
  {
    path: '',
    component: CollapsibletableComponent,    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestTableRoutingModule {}
