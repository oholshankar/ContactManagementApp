import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/shared/contact.model';
import { ContactService } from 'src/app/shared/contact.service';
import { ContactAddReactiveComponent } from '../contact-add-reactive/contact-add-reactive.component';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent {
  constructor(public contService: ContactService, private toastService: ToastrService, private modalService: NgbModal) {

  }
  ngOnInit(): void {
    this.contService.refreshContactList();
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
    const modalRef: NgbModalRef = this.modalService.open(
      ContactAddReactiveComponent,
      {
        size: "lg",
        backdrop: "static",
        windowClass: ".modal-dialog ",
      }
    );
    modalRef.componentInstance.contactData = this.contService.formData;
  }
  getContact(cd: Contact) {

    this.contService.formData = Object.assign({}, cd);
    const modalRef: NgbModalRef = this.modalService.open(
      ContactAddReactiveComponent,
      {
        size: "lg",
        backdrop: "static",
        windowClass: ".modal-dialog ",
      }
    );
    modalRef.componentInstance.contactData = cd;

  }
}
