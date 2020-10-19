import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { USER } from '../user';
import { Card } from '../card-interface';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user = USER;
  @Input() editedKey: string;
  @Input() editedObject: Card;
  @Input() modalId: string;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm): void {
    if ((this.editedKey || this.editedObject)? !confirm('Save changes?') : !confirm('Add new project?')) {
      this.closeModal(this.modalId);
    } else {
      if (Object.values(form.value).length > 1) {
        if (!this.editedObject) {
          USER.experience.push(form.value)
        } else {
          this.editedObject.name = form.value.name;
          this.editedObject.description = form.value.description;
        }
      } else {
        if (USER[this.editedKey]) USER[this.editedKey] = form.value[this.editedKey];
        else USER.contacts[this.editedKey] = form.value[this.editedKey];
      }
      this.closeModal(this.modalId);
    }
  }

  getEditedKeyValue(): string {
    return USER[this.editedKey] || USER.contacts[this.editedKey];
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }

  cancel(): void {
    if (this.editedObject) {
        this.editedObject.name = this.editedObject.name + ' ';
        this.editedObject.description = this.editedObject.description + ' ';
    } else {
      if (USER[this.editedKey]) USER[this.editedKey] = (USER[this.editedKey] + ' ');
      else USER.contacts[this.editedKey] = USER.contacts[this.editedKey] + ' ';
    }
    this.closeModal(this.modalId);
  }

  deleteElement(): void {
    if (!confirm('Are you sure to delete?')) {
      this.closeModal(this.modalId);
    } else {
      if (this.editedKey) {
        USER[this.editedKey] ? USER[this.editedKey] = '' : USER.contacts[this.editedKey] = '';

      } else if (this.editedObject) {
        const softSkillsPosition: number = USER.softSkills.map(o => o.name).indexOf(this.editedObject.name);
        const techSkillsPosition: number = USER.techSkills.map(o => o.name).indexOf(this.editedObject.name);
        const experiencePosition: number = USER.experience.map(o => o.name).indexOf(this.editedObject.name);

        if (softSkillsPosition !== -1) {
          USER.softSkills.splice(softSkillsPosition, 1);
        } else if (techSkillsPosition !== -1) {
          USER.techSkills.splice(techSkillsPosition, 1);
        } else {
          USER.experience.splice(experiencePosition, 1);
        }
      }
    }
    this.closeModal(this.modalId);
  }

}
