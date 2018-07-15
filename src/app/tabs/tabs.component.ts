import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tab} from "./tab.interface";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabs: Array<any>;
  //tabs: Tab[] = [];
  @Output() selected = new EventEmitter();

  activeTab=0;


  selectTab(tab: Tab) {
    this.tabs.map((tab) => {
      tab.selected = false;
    })
    tab.selected = true;
    this.selected.emit({selectedTab: tab});
  }
}
