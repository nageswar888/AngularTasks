import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { PipingPipe } from './piping.pipe';




@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    PipingPipe
  ],
  imports: [
    BrowserModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
