import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import {TabComponent} from "./tab.component";
import {ATableTitle, TabTitleComponent} from './tab/tab-title/tab-title.component';
import { TabContentComponent } from './tab/tab-content/tab-content.component';
import {BrowserModule} from "@angular/platform-browser";
import { SimpleTitleComponent } from './content/simple-title/simple-title.component';


@NgModule({
  imports: [
    CommonModule,BrowserModule
  ],
  declarations: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent, ATableTitle, SimpleTitleComponent],
  providers: [],
  entryComponents: [ATableTitle,SimpleTitleComponent],
  exports: [
    TabsComponent
  ]
})
export class TabsModule { }
