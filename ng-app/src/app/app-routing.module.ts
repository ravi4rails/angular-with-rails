import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserNewComponent } from './user/user-new/user-new.component';


import { UserListComponent } from './user/user-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users/new', component: UserNewComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'users', component: UserListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
