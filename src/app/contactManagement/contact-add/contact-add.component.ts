import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/shared/contact.model';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {
  @Output() closePopup = new EventEmitter();
  constructor(public contService: ContactService, private toastService: ToastrService) {

  }
  onSubmit(form: NgForm) {
    this.contService.formSubmitted = true;
    if (form.valid && this.contService.formData.firstName.trim() != '' && this.contService.formData.lastName.trim() != '') {
      if (this.contService.formData.id == 0) {
        this.saveContact(form);
      } else {
        this.updateContact(form);
      }
    }
  }

  saveContact(form: NgForm) {
    this.contService.submitContact().subscribe({
      next: res => {
        this.contService.listContacts = res as Contact[];
        this.contService.resetForm(form);
        this.closePopup.emit();
        this.toastService.success("Submitted Successfully", 'Contact App');
      },
      error: err => {
        this.toastService.error(err, 'Contact App');
      }
    })
  }
  updateContact(form: NgForm) {
    this.contService.updateContact().subscribe({
      next: res => {
        this.contService.listContacts = res as Contact[];
        this.contService.resetForm(form);
        this.closePopup.emit();
        this.toastService.info("Updated Successfully", 'Contact App');
      },
      error: err => {
        this.toastService.error(err, 'Contact App');
      }
    })
  }
}
