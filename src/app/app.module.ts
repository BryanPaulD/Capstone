import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BallotComponent } from './ballot/ballot.component';
import { ResultsComponent } from './results/results.component';
import {CandidatesService} from "./services/candidates.service.service";
import {RouterModule, Routes} from "@angular/router";
import { BeginningComponent } from './beginning/beginning.component';

const appRoutes: Routes = [
  { path: "beginning", component: BeginningComponent},
  { path: "ballot", component: BallotComponent},
  { path: "results", component: ResultsComponent},
  { path: "", redirectTo: "beginning", pathMatch: "full"}
];

@NgModule({
  declarations: [
    AppComponent,
    BallotComponent,
    ResultsComponent,
    BeginningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
