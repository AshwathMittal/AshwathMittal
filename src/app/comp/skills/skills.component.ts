import { sill } from 'src/skills';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills=sill;
  constructor() {
}

  ngOnInit(): void {
  }

}
