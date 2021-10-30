import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './comp/contact/contact.component';
import { HomeComponent } from './comp/home/home.component';
import { ProjsComponent } from './comp/projs/projs.component';
import { SkillsComponent } from './comp/skills/skills.component';
import { TerminalComponent } from './linux/terminal/terminal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'terminal', component: TerminalComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
