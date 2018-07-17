import {AfterContentInit, Component, Input, OnInit, TemplateRef} from '@angular/core';



@Component({
  selector: 'tab-title',
  template: `
    <ng-template #defaultTabTitle let-name="name">
      <h3>{{ name }}</h3>
    </ng-template>

    <ng-container
      *ngTemplateOutlet="titleTemplate ? titleTemplate: defaultTabTitle; context:ctx">
    </ng-container>`,

})
export class TabTitleComponent implements OnInit{
  titleTemplate: TemplateRef<any>;
  @Input() tab;
  ctx = {name:''};

  ngOnInit(){
    this.ctx = {name:this.tab.title};
    if(this.tab.titleTemplate) {
      this.titleTemplate = this.tab.titleTemplate;
    }
  }

}
