import { Component, Input, OnInit } from '@angular/core';

import { Card } from '../card-interface';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  @Input() project: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
