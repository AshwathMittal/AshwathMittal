import { Component, OnInit,Input } from '@angular/core';
import { commands } from 'src/commands';
@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css', "../terminal/terminal.component.css"]
})
export class PromptComponent implements OnInit {
  @Input() cmd: commands;
  constructor() {
   }

  ngOnInit(): void {
  }

}
