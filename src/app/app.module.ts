import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test.component";
import {HomeComponent} from "./home.component";



const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'test',  component: TestComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
