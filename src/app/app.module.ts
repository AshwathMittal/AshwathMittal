import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { FormsModule } from '@angular/forms';
import { TerminalComponent } from './linux/terminal/terminal.component';
import { PromptComponent } from './linux/prompt/prompt.component';
import { LProjectsComponent } from './linux/l-projects/l-projects.component';
import { LSkillsComponent } from './linux/l-skills/l-skills.component';

@NgModule({
  declarations: [
    TerminalComponent,
    PromptComponent,
    LSkillsComponent,
    LProjectsComponent,
    AppComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, TerminalComponent, PromptComponent, LSkillsComponent, LProjectsComponent]
})
export class AppModule { }
