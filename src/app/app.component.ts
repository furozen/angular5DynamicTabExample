import {Component, ViewChild} from '@angular/core';
import {TabsComponent} from "./tabs/tabs.component";
import {HelloComponent} from "./hello.component";
import {DummyContent} from "./tabs/content/dummy-content/dummy-content.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public tabs=[];
  public index:number=0;
  @ViewChild(HelloComponent) helloComponent;
  @ViewChild(DummyContent) simpleTitleComponent;
  @ViewChild('BigHeader') BigHeaderTemplate;

  public dec() {
    if(this.tabs.length >0) {
      this.tabs.splice(--this.index, 1);
    }
  }

  public inc() {
    if(this.tabs.length % 2===0) {
      this.tabs.push({title: 'Tab' + this.tabs.length, component: DummyContent});
    } else {
      this.tabs.push({title: 'Tab' + this.tabs.length, component: DummyContent, titleTemplate:this.BigHeaderTemplate});
    }
  }
}
