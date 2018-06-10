import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import { UserService } from './user/user.service';
import { LoginService } from './login/login.service';
import { HttpClientModule } from "@angular/common/http";
import { AddUserComponent } from './user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AddCardComponent } from './addcard/addcard.component';
import { AddCardService } from './addcard/addcard.service';
import { GetcardComponent } from './getcard/getcard.component';
import { GetCardService } from './getcard/getcard.service';
import { SearchcardComponent } from './searchcard/searchcard.component';
import { SearchcardService } from './searchcard/searchcard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    LoginComponent,
    AddCardComponent,
    GetcardComponent,
    SearchcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, LoginService, AddCardService, GetCardService, SearchcardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
