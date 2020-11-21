import { Component, EventEmitter, Output } from '@angular/core';

import { DATA } from '../shared/data';

@Component({
  selector: 'app-hotkeys',
  templateUrl: './hotkeys.component.html',
  styleUrls: ['./hotkeys.component.css']
})
export class HotkeysComponent {
  data = DATA;
  keys: string[] = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'];
  @Output() pushHotkey = new EventEmitter();

  addTag(tagName: string): void {
    const tag: string = `<${tagName === 'a' ? tagName + ' href=""' : tagName}></${tagName}>`;
    this.pushHotkey.emit(tag);
  }
}
