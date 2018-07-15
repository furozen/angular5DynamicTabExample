import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import {TabComponent} from "./tab.component";
import { TabTitleComponent} from './tab/tab-title/tab-title.component';
import {DefaultTabContent, TabContentComponent} from './tab/tab-content/tab-content.component';
import {BrowserModule} from "@angular/platform-browser";
import { DummyContent } from './content/dummy-content/dummy-content.component';


@NgModule({
  imports: [
    CommonModule,BrowserModule
  ],
  declarations: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent, DefaultTabContent, DummyContent],
  providers: [],
  entryComponents: [DefaultTabContent,DummyContent],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
