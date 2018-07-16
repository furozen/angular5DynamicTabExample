import {AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {Tab} from "./tab.interface";
import {TabComponent} from "./tab.component";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent  {
  @Input() tabs: Array<any>;

  activeTab=0;


  selectTab(tab: Tab) {
    this.tabs.map((tab) => {
      tab.selected = false;
    });
    tab.selected = true;

  }



}
