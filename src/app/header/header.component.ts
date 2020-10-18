import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '../modal/modal.service';

import { USER } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = USER;
  @Input() editMode: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id) {
    this.modalService.open(id);
  }
}
