import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebcamComponent } from './webcam/webcam.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { SearchComponent } from './search/search.component';
import { NewbusinesscardComponent } from './newbusinesscard/newbusinesscard.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: {animation: 'Login'} },
    { path: 'not-found', component: NotFoundComponent,
      data: {animation: 'NotFound'} },
    { path: 'add-card', component: NewbusinesscardComponent,
      data: {animation: 'AddCard'}, canActivate: [AuthGuard] },
    { path: 'webcam', component: WebcamComponent,
      data: {animation: 'WebCam'}, canActivate: [AuthGuard] },
      { path: 'card', component: BusinesscardComponent,
        data: {animation: 'Card'}, canActivate: [AuthGuard] },
    { path: 'search', component: SearchComponent,
         data: {animation: 'Search'}, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
