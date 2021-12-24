import { Component, OnInit } from '@angular/core';
import { skills } from 'src/skills';

@Component({
  selector: 'app-l-skills',
  templateUrl: './l-skills.component.html',
  styleUrls: ['./l-skills.component.css', "../terminal/terminal.component.css"]
})
export class LSkillsComponent implements OnInit {
  skills=skills;

  constructor() { }

  ngOnInit(): void {
  }

}
