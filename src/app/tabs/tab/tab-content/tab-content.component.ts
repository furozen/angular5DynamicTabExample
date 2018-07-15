import {AfterContentInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'a-tab-content',
  template: `Hello, I'm default!
  `,
})
export class DefaultTabContent {}


@Component({
  selector: 'tab-content',
  template: `
    <ng-container *ngComponentOutlet="tabComponent"></ng-container>`,
})

export class TabContentComponent implements OnInit {
  @Input() tab;
  tabComponent = DefaultTabContent;
  constructor() { }

  ngOnInit() {
    this.tabComponent = this.tab.component;
  }

}
