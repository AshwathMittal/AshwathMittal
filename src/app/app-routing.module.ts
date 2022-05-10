import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comp/home/home.component';
import { TerminalComponent } from './linux/terminal/terminal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terminal', component: TerminalComponent },
  {path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
