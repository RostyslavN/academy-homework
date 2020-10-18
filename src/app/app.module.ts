import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    SkillsComponent,
    ExperienceComponent,
    SkillCardComponent,
    ExperienceCardComponent,
    ModalComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
