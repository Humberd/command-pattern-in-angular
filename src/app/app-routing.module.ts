import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'jobs', loadChildren: () => import('./views/jobs/jobs.module').then(m => m.JobsModule),
  },
  {
    path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'users/:id', loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}