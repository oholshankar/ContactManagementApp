import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/shared/contact.model';
import { ContactService } from 'src/app/shared/contact.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-contact-add-reactive',
  templateUrl: './contact-add-reactive.component.html',
  styleUrls: ['./contact-add-reactive.component.css']
})
export class ContactAddReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  @Output() closePopup = new EventEmitter();
  @Input() contactData = new Contact();

  constructor(private fb: FormBuilder, public contService: ContactService, public activeModal: NgbActiveModal, private toastService: ToastrService) {
    console.log(this.contactData);
  }
  ngOnInit(): void {
    if (this.contactData.id == 0) {
      this.contactForm = this.fb.group({
        id: ['0', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      });
    } else {
      this.contactForm = this.fb.group({
        id: [this.contService.formData.id, Validators.required],
        firstName: [this.contService.formData.firstName, Validators.required],
        lastName: [this.contService.formData.lastName, Validators.required],
        email: [this.contService.formData.email, [Validators.required, Validators.email]]
      });
    }
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.contService.formSubmitted = true;
    if (this.contactForm.invalid) {
      return
    } else {
      this.contService.formData = this.contactForm.value;
      if (this.contService.formData.id == 0) {
        this.saveContact();
      } else {
        this.updateContact();
      }
      this.activeModal.close();
    }
  }

  saveContact() {
    this.contService.submitContact().subscribe({
      next: res => {
        this.contService.listContacts = res as Contact[];
        this.toastService.success("Submitted Successfully", 'Contact App');
      },
      error: err => {
        console.log(err);
      }
    })
  }
  updateContact() {
    this.contService.updateContact().subscribe({
      next: res => {
        this.contService.listContacts = res as Contact[];
        this.toastService.info("Updated Successfully", 'Contact App');
      },
      error: err => {
        console.log(err);
      }
    })
  }

  closeModal() {
    this.activeModal.close();
  }


}
