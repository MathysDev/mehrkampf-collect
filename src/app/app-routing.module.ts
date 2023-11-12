import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaufzettelListComponent } from './laufzettel-list/laufzettel-list.component';
import { LaufzettelComponent } from './laufzettel/laufzettel.component';
import { StartnrselComponent } from './startnrsel/startnrsel.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: 'laufzettel/:id', component: LaufzettelComponent } ,
{ path: 'laufzettel/:id/:list', component: LaufzettelComponent } ,
{ path: 'list', component: LaufzettelListComponent } ,
{ path: 'start', component: StartnrselComponent } ,
{ path: 'start/:notfound', component: StartnrselComponent } ,
{ path: '', redirectTo: 'login', pathMatch: 'full'} ,
{ path: 'login', component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
