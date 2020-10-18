import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curriculum-vitae';
  editMode: Boolean = false;

  changeMode(): void {
    this.editMode = !this.editMode;
  }
}
