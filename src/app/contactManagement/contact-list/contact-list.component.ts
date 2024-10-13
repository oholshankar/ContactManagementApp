import { Component, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/shared/contact.service';
import { Contact } from 'src/app/shared/contact.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @ViewChild('closePopup') closePopupAfterSave: any;
  constructor(public contService: ContactService, private toastService: ToastrService) {

  }
  ngOnInit(): void {
    this.contService.refreshContactList();
  }

  getContact(cd: Contact) {
    this.contService.formData = Object.assign({}, cd);

  }
  deleteContact(id: number) {
    if (confirm('Are you sure to delete?'))
      this.contService.deleteContact(id).subscribe({
        next: res => {
          this.contService.listContacts = res as Contact[];
          this.toastService.warning("Deleted Successfully", 'Contact App', { timeOut: 1000 });
        },
        error: err => {
          console.log(err);
        }
      })
  }

  resetData() {
    this.contService.formData.id = 0;
    this.contService.formData.firstName = '';
    this.contService.formData.lastName = '';
    this.contService.formData.email = '';
  }

  closeModal() {
    this.closePopupAfterSave.nativeElement.click();
  }
}
