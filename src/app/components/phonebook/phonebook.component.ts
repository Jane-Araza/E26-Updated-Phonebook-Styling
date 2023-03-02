import { Component } from '@angular/core';
import { CONTACTS } from 'src/app/mock-data/mock-phonebook';
import { Contacts } from 'src/app/interfaces/phonebook';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent {
  contacts = CONTACTS;
  newContactName = '';
  newContactNumber = '';
  updateContactDetails?: Contacts;

  addContact() {
    this.contacts.push({
      name: this.newContactName,
      number: this.newContactNumber
    })
  }

  deleteContact(id: number) {
      this.contacts.splice(id, 1);
  }

  updateContact(contact: Contacts){
    this.updateContactDetails = contact;
  }
}

