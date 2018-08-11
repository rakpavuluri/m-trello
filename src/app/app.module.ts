import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllBoardsComponent } from './all-boards/all-boards.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SharedService } from './services/shared.service';
import { CommonModule } from '../../node_modules/@angular/common';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBoardsComponent,
    HeaderComponent,
    LoaderComponent,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
