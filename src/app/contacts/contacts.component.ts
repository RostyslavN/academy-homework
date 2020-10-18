import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '../modal/modal.service';

import { USER } from '../user';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  user = USER;
  @Input() editMode: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
