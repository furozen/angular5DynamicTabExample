import {
  AfterContentInit, AfterViewInit, ChangeDetectorRef, Compiler,
  Component, ComponentFactoryResolver,
  ComponentRef, ContentChild,
  Injector,
  Input, OnChanges, OnDestroy,
  OnInit,
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
    <ng-container #ngComponentOutlet  *ngComponentOutlet="tabComponent;injector: myInjector; 
                                      content: myContent"></ng-container>
    <div #target></div>
  `,
})

export class TabContentComponent implements OnInit,AfterViewInit,OnChanges,OnDestroy {
  @Input() tab;
  @ViewChild('target', {read: ViewContainerRef}) target;
  @ViewChild(DefaultTabContent, {read: ViewContainerRef}) ngComponentOutlet;
  @ContentChild(DefaultTabContent, {read: ViewContainerRef}) ngComponentOutlet2;
  tabComponent = DefaultTabContent;
  myInjector: Injector;

  myContent;


  ngOnInit() {


  }


  cmpRef: ComponentRef<any>;
  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private _viewContainerRef: ViewContainerRef,
              private compiler: Compiler,
              private cdRef: ChangeDetectorRef) {
  }

  updateComponent() {

    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    let factory = this.componentFactoryResolver.resolveComponentFactory(this.tabComponent);
    this.cmpRef = this.target.createComponent(factory)
    // to access the created instance use
     this.cmpRef.instance.tab = this.tab;
    this.cdRef.detectChanges();



  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    if (this.tab.component) {
      let factory = this.componentFactoryResolver.resolveComponentFactory(this.tab.component);
      let cmpRef = this.target.createComponent(factory)
      // to access the created instance use
      cmpRef.instance.tab = this.tab;
      this.cdRef.detectChanges();
      this.tabComponent = this.tab.component;
    }
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

}
