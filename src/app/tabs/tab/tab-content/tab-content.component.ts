import {
  AfterViewInit, ChangeDetectorRef, Compiler,
  Component, ComponentFactoryResolver,
  ComponentRef, ElementRef, Injector,
  Input,
  OnDestroy,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'a-tab-content',
  template: `Hello {{tab?tab.title:':o)'}}, I'm default!
  `,
})
export class DefaultTabContent {
  @Input() tab;
}


@Component({
  selector: 'tab-content',
  template: `    
    <ng-container #target></ng-container>
  `,
})

export class TabContentComponent implements AfterViewInit,OnDestroy {
  @Input() tab;
  @ViewChild('target', {read: ViewContainerRef}) target;


  tabComponent = DefaultTabContent;


  cmpRef: ComponentRef<any>;
  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private _viewContainerRef: ViewContainerRef,
              private compiler: Compiler,
              private injector:Injector,
              private cdRef: ChangeDetectorRef,
              private elRef: ElementRef) {
  }

  updateComponent() {

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
    let node = this.elRef.nativeElement.parentElement.parentElement.parentElement.childNodes[1];
    let factory = this.componentFactoryResolver.resolveComponentFactory(this.tabComponent);
    // node projecting is not working
    this.cmpRef = this.target.createComponent(factory,0,this.injector, [[node]]);

    this.cmpRef.instance.tab = this.tab;
    this.cdRef.detectChanges();

  }


  ngAfterViewInit() {
    if (this.tab.component) {
      this.tabComponent = this.tab.component;
    }
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

}
