import { Component, OnInit } from '@angular/core';
import { IContact } from './contact';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'rep-contacts',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})

export class ContactList implements OnInit{
    contactList: IContact[];
    errorMessage: string;

    constructor(private contactService: ContactService){

    }

    getContactFields(): string[] {
        return Object.keys(this.contactList[0]);
    }

    ngOnInit(): void {
        this.contactService.getContacts().subscribe({
            next: contacts => this.contactList = contacts,
            error: err => this.errorMessage = err
        });
    }
}