import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFeedComponent } from './modules/feed/main-feed.component';
import { LoginComponent } from './modules/login/login.component';
import { OrderComponent } from './modules/order/order.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: MainFeedComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path:'order',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
