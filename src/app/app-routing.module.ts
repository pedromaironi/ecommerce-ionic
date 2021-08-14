import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'order-detail',
    loadChildren: () =>
      import('./order-detail/order-detail.module').then((m) => m.OrderDetailPageModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./my-orders/my-orders.module').then((m) => m.MyOrdersPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'confirm',
    loadChildren: () =>
      import('./confirm/confirm.module').then((m) => m.ConfirmPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'itemdetails',
    loadChildren: () =>
      import('./item-details/item-details.module').then((m) => m.ItemDetailsPageModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./my-cart/my-cart.module').then((m) => m.MyCartPageModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./my-cart/my-cart.module').then((m) => m.MyCartPageModule),
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
