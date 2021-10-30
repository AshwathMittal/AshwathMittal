import { Component, OnInit } from '@angular/core';
import { projects } from 'src/projects';

@Component({
  selector: 'app-l-projects',
  templateUrl: './l-projects.component.html',
  styleUrls: ['./l-projects.component.css', "../terminal/terminal.component.css"]
})
export class LProjectsComponent implements OnInit {
  project = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
