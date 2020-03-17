import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list.component';
import { UserService } from './user/user.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserNewComponent } from './user/user-new/user-new.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomepageComponent,
    UserDetailsComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
