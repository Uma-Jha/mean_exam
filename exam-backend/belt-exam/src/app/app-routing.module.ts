import { ViewPollComponent } from './view-poll/view-poll.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent}, { path: 'all', component: HomeComponent}, 
  { path: 'new', component: NewComponent},
  { path: 'poll/:id', component: ViewPollComponent}
   // children: [ { path: 'all', component: HomeComponent}, { path: 'new', component: NewComponent}]},
 /*{ path: '**', redirectTo: '' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
