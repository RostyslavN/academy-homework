import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '../modal/modal.service';

import { USER } from '../user';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  user = USER;
  @Input() editMode: boolean

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
