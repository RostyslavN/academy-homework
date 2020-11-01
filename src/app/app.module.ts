import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainViewerComponent } from './main-viewer/main-viewer.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { EditingBlockComponent } from './editing-block/editing-block.component';
import { EditBlockComponent } from './edit-block/edit-block.component';
import { StyleBlockComponent } from './style-block/style-block.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { GenerateElementComponent } from './generate-element/generate-element.component';
import { GenerateTableComponent } from './generate-table/generate-table.component';
import { GenerateListComponent } from './generate-list/generate-list.component';
import { SanitizeHtmlPipe } from './shared/sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainViewerComponent,
    ButtonsComponent,
    EditingBlockComponent,
    EditBlockComponent,
    StyleBlockComponent,
    ColorPickerComponent,
    GenerateElementComponent,
    GenerateTableComponent,
    GenerateListComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
