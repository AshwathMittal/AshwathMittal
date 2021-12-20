import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { ProjsComponent } from './comp/projs/projs.component';
import { ContactComponent } from './comp/contact/contact.component';
import { MyFootComponent } from './comp/my-foot/my-foot.component';
import { SkillsComponent } from './comp/skills/skills.component';
import { FormsModule } from '@angular/forms';
import { TerminalComponent } from './linux/terminal/terminal.component';
import { PromptComponent } from './linux/prompt/prompt.component';
import { LProjectsComponent } from './linux/l-projects/l-projects.component';
import { LSkillsComponent } from './linux/l-skills/l-skills.component';
import { AboutComponent } from './linux/about/about.component';
import { LContactComponent } from './l-contact/l-contact.component';

@NgModule({
  declarations: [
    LContactComponent,
    AboutComponent,
    TerminalComponent,
    PromptComponent,
    LSkillsComponent,
    LProjectsComponent,
    AppComponent,
    HomeComponent,
    ProjsComponent,
    ContactComponent,
    MyFootComponent,
    SkillsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
