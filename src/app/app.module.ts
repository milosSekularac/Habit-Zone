import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HabitsComponent } from './habits/habits.component';
import { DailiesComponent } from './dailies/dailies.component';
import { ToDoComponent } from './to-do/to-do.component';
import { RewardsComponent } from './rewards/rewards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HabitsComponent,
    DailiesComponent,
    ToDoComponent,
    RewardsComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
