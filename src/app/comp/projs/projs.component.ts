import { Component, OnInit } from '@angular/core';
import { projects } from 'src/projects';
@Component({
  selector: 'app-projs',
  templateUrl: './projs.component.html',
  styleUrls: ['./projs.component.css']
})
export class ProjsComponent implements OnInit {
  project = projects;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
