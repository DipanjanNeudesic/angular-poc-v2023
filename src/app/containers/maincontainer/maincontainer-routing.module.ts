import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontainerComponent } from './components/maincontainer/maincontainer.component';

const routes: Routes = [
  {
    path: '',
    component: MaincontainerComponent,
    children: [
      {
        path: 'results',
        loadChildren: () =>
          import('src/app/testtable/testtable.module').then(
            (m) => m.TesttableModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContainerRoutingModule {}
