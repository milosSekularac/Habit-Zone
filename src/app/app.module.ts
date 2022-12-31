import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HabitComponent } from './habit/habit.component';
import { FormsModule } from '@angular/forms';
import { HabitService } from './services/habit.service';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HabitComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [HabitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
