import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { projects } from 'src/projects';
import { skills } from 'src/skills';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projects = projects;
  skills = skills;
  constructor(private router: Router) { 


  }   
  OpenTerminal(){
      setTimeout(() => this.router.navigate(['/terminal'],{ skipLocationChange: true }), 1000);
    // this.router.navigateByUrl('terminal');//, { skipLocationChange: true };

    }
}