import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SolutionsModule } from './solutions/solutions.module';
//import { solutionsRouter } from './solutions/solutions.router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './not-found.component';
import { LazyLoadingMainModule } from './solutions/lazyloading/lazy-loading-main.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    SolutionsModule,
    //LazyLoadingMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
