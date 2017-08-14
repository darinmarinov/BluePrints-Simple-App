import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  @ViewChild('serverContentInput') serverContentInput;
   constructor() { }

  ngOnInit() {
  }
  
  onAddServer(nameInput:HTMLInputElement){
    console.log(this.serverContentInput)
     this.serverCreated.emit({
       serverName : nameInput.value,
       serverContent : this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprints(nameInput:HTMLInputElement){
       console.log(this.serverContentInput)
     this.bluePrintCreated.emit({
       serverName : nameInput.value,
         serverContent : this.serverContentInput.nativeElement.value
    })
  }
  
  


}
