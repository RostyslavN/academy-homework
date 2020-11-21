import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainViewerComponent } from './main-viewer/main-viewer.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CustomizationBlockComponent } from './customization-block/customization-block.component';
import { EditBlockComponent } from './edit-block/edit-block.component';
import { StyleBlockComponent } from './style-block/style-block.component';
import { GenerateElementComponent } from './generate-element/generate-element.component';
import { GenerateTableComponent } from './generate-table/generate-table.component';
import { GenerateListComponent } from './generate-list/generate-list.component';
import { SanitizeHtmlPipe } from './shared/sanitize-html.pipe';
import { BlockingModalComponent } from './blocking-modal/blocking-modal.component';
import { HotkeysComponent } from './hotkeys/hotkeys.component';
import { MinValidatorDirective } from './shared/min-validator.directive';
import { MaxValidatorDirective } from './shared/max-validator.directive';
import { ExampleBlockComponent } from './example-block/example-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewerComponent,
    ButtonsComponent,
    CustomizationBlockComponent,
    EditBlockComponent,
    StyleBlockComponent,
    GenerateElementComponent,
    GenerateTableComponent,
    GenerateListComponent,
    SanitizeHtmlPipe,
    BlockingModalComponent,
    HotkeysComponent,
    MinValidatorDirective,
    MaxValidatorDirective,
    ExampleBlockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
