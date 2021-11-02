import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookDashboardComponent } from './components/book-dashboard/book-dashboard.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: BookDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
