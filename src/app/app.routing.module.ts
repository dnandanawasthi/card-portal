import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AddCardComponent } from './addcard/addcard.component';
import { GetcardComponent } from './getcard/getcard.component';
import { SearchcardComponent } from './searchcard/searchcard.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'login', component : LoginComponent},
  { path: 'addcard', component : AddCardComponent},
  { path: 'getcard', component : GetcardComponent},
  { path: 'searchcard', component : SearchcardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
