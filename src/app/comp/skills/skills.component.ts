import { Skill } from 'src/skills';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[]

  constructor() { this.skills=[
    {
      name: "Web Development",
      experience: "Advanced , 1.5yrs",
      tools: "Angular, HTML, CSS, JavaScript, NodeJs, MongoDB",
      itof: true
    },
    {
      name: "Robotics",
      experience: "Advanced",
      tools: "Raspberry Pi, Arduino UNO",
      itof: true
    },
    {
      name: "Python",
      experience: "Beginner , Currently Learning",
      tools: null,
      itof: false
    },
    {
      name: "Linux",
      experience: "Intermediate",
      tools: null,
      itof: false
    },
    {
      name: "Dev Ops",
      experience: "Intermediate",
      tools: "Git",
      itof: true
    }
  ]
}

  ngOnInit(): void {
  }

}
