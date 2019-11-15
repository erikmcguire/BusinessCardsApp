import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { WebcamComponent } from './webcam/webcam.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'dashboard', component: DashboardComponent,
      canActivate: [AuthGuard] },
    { path: 'webcam', component: WebcamComponent,
      canActivate: [AuthGuard] },
      { path: 'card', component: BusinesscardComponent,
        canActivate: [AuthGuard] },
    { path: 'search', component: SearchComponent,
        canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
