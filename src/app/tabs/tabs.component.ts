import {
  Component,
  Input,
} from '@angular/core';
import {Tab} from "./tab.interface";

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabs: Array<any>;

  selectTab(tab: Tab) {
    this.tabs.map((tab) => {
      tab.selected = false;
    });
    tab.selected = true;
  }

}
