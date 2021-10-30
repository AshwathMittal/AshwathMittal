import { Component, OnInit, Output } from '@angular/core';
import { commands } from 'src/commands';
import { sill } from 'src/skills';
import { Router } from '@angular/router';


@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})

export class TerminalComponent implements OnInit {
  in: string;
  commands: commands[];
  skills = sill;
    constructor(private router: Router) {  
      this.commands = JSON.parse(localStorage.getItem('commands'));
      if(this.commands == null){
        this.commands = [];
      }
      console.log(this.commands);
    }

  ngOnInit(): void {
    console.log(this.commands);
    
  }
name(){
  var element = document.getElementById("cmd");
  element.scrollTop = element.scrollHeight;
  this.commands.push({name: this.in.toLowerCase()});  
  if(this.in.toLowerCase() == "clear"){
    this.commands = [];
  } 
  else if(this.in.toLowerCase() == "exit"){
    this.router.navigateByUrl('/');
  }
  localStorage.setItem('commands', JSON.stringify(this.commands));
  this.in = '';


}
}
