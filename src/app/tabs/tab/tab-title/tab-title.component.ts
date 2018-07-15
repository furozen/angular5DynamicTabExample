import {AfterContentInit, Component, Input} from '@angular/core';

@Component({
  selector: 'a-tab-title',
  template: `A Table title
  `,
})
export class ATableTitle {}


@Component({
  selector: 'tab-title',
  template: `<ng-container *ngComponentOutlet="theTabTitle"></ng-container>`,

})
export class TabTitleComponent implements AfterContentInit{
  theTabTitle = ATableTitle;
  @Input() tab;

 ngAfterContentInit(){
   this.theTabTitle = this.tab.component;
 }
}
