import { Component } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalContacts: number = 0
  constructor(public contService: ContactService) {

  }
  ngOnInit(): void {
    this.contService.refreshContactList();
  }




}
