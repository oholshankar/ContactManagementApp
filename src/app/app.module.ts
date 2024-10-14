import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contactManagement/contact-list/contact-list.component';
import { ContactAddComponent } from './contactManagement/contact-add/contact-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { ContactAddReactiveComponent } from './contactManagement/contact-add-reactive/contact-add-reactive.component';
import { ContactReactiveComponent } from './contactManagement/contact-reactive/contact-reactive.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactAddComponent,
    DashboardComponent,
    ContactAddReactiveComponent,
    ContactReactiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
