import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skills: Skill[]
  constructor() { 
    this.skills=[
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
