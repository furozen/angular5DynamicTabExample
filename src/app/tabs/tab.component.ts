import {Component, Input, OnInit} from '@angular/core';
import {TabsComponent} from "./tabs.component";
import {Tab} from "./tab.interface";

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']

})
export class TabComponent implements OnInit {

  @Input() data;
  title:string;

  constructor() {}

  ngOnInit() {
    this.title = this.data.title;
  }
}
