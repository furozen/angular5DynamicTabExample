import {Component, ViewChild} from '@angular/core';
import {TabsComponent} from "./tabs/tabs.component";
import {HelloComponent} from "./hello.component";
import {DummyContent} from "./tabs/content/dummy-content/dummy-content.component";
import {TestComponent} from "./test.component";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public tabs = [];
  public index: number = 0;
  @ViewChild(HelloComponent) helloComponent;
  @ViewChild(DummyContent) simpleTitleComponent;
  @ViewChild('BigHeader') BigHeaderTemplate;

  public dec() {
    let indexOfSelected = this.getSelectedIndex();
    if (this.tabs.length > 0 && indexOfSelected!==undefined) {
      this.tabs.splice(indexOfSelected, 1);
    }
    this.setSelectedByIndex(0);
  }

  setSelectedByIndex(index){
    if(this.tabs[index]){
      this.tabs[index].selected = true;
    }
  }

  private getSelectedIndex() {
    let indexOfSelected;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        indexOfSelected = i;
      }
    }
    return indexOfSelected;
  }

  public inc() {
    let selected = true;
    if(this.getSelectedIndex()!==undefined){
      selected = false;
    }
    if (this.tabs.length % 2 === 0) {
      this.tabs.push({title: 'Tab' + this.tabs.length, component: DummyContent, selected:selected});
    } else {
      this.tabs.push({title: 'Tab' + this.tabs.length, component: TestComponent, titleTemplate: this.BigHeaderTemplate, selected:selected});
    }
  }
}
