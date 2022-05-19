import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'userlist', pathMatch: 'full' },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'userlist',
        loadChildren: () =>
          import('../userlist/userlist.module').then((m) => m.UserlistModule),
      },
      {
        path: 'chart',
        loadChildren: () =>
          import('../chart/chart.module').then((m) => m.ChartModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
