import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/pages/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  { path: 'home', redirectTo: '' },
  {
    path: 'singlerepo/:owner/:reponame',
    loadChildren: () =>
      import('src/app/pages/singlerepopage/singlerepopage.module').then(
        (m) => m.SinglerepopageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
