import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnDestroy  {
 constructor(){
 }
 
  destroyServers(){
     this.serverElements = [];
   }
  
 ngOnDestroy(){
   this.destroyServers()
 }

  serverElements = [{type:"server",name:'test',content:'simple test'}];
 
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintrData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintrData.serverName,
      content: bluePrintrData.serverContent
    });
  }

}
