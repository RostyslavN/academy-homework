import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    if (!this.id) {
      return console.error('modal must have an id');
    }

    document.body.appendChild(this.element);

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
