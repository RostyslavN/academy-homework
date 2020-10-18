import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../card-interface';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {
  status: boolean;

  @Input() skill: Card;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
    this.status = this.index === 0 ? true : false;
  }

  toogleCard(): void {
    this.status = !this.status;
  }
}
