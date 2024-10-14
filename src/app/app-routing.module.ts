import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactListComponent } from './contactManagement/contact-list/contact-list.component';
import { ContactReactiveComponent } from './contactManagement/contact-reactive/contact-reactive.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{ path: 'Home', component: DashboardComponent },
{ path: 'ManageContact', component: ContactListComponent },
{ path: 'ManageContactReactive', component: ContactReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
