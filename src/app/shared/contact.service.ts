import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Contact } from './contact.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = environment.appBaseUrl + '/Contacts';
  listContacts: Contact[] = [];
  formData: Contact = new Contact();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }

  //Get Contact List--User Story-Get Contact 001
  refreshContactList() {
    this.http.get(this.url).subscribe({
      next: res => {
        this.listContacts = res as Contact[];
      }, error: err => {
        console.log(err);
      }
    })
  }

  //Save Contact--User Story-Save Contact 002
  submitContact() {
    return this.http.post(this.url, this.formData);
  }

  //Update Contact-User Story-Update Contact 003
  updateContact() {
    return this.http.put(this.url + '/' + this.formData.id, this.formData);
  }

  //Delete Contact-User Story-Delete Contact 004
  deleteContact(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  //Reset Form After Service Call-User Story-Delete Contact 005
  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new Contact();
    this.formSubmitted = false;

  }

}
