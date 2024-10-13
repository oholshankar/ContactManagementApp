import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListComponent } from './contactManagement/contact-list/contact-list.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: 'Home', component: DashboardComponent },
{ path: 'ManageContact', component: ContactListComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
