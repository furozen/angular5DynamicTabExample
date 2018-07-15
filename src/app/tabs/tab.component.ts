import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from "./tabs.component";
import {Tab} from "./tab.interface";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']

})
export class TabComponent implements OnInit,Tab {

  @Input() data;
  @Input() selected;
  title:string;

  constructor(private tabsComponent: TabsComponent) {}

  ngOnInit() {
    this.title = this.data.title;
  }
}
