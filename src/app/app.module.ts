import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';

import {TabsModule} from "./tabs/tabs.module";
import {SimpleTitleComponent} from "./tabs/content/simple-title/simple-title.component";


@NgModule({
  imports:      [ BrowserModule, FormsModule, TabsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  entryComponents: [HelloComponent,SimpleTitleComponent],
  bootstrap:    [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
