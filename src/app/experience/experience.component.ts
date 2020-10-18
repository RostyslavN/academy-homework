import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '../modal/modal.service';
import { USER } from '../user';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  user = USER;
  @Input() editMode: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
