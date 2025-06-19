import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';

import { UserAuthComponent } from './user-auth/user-auth.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    
  },
 
  {
    component: SearchComponent,
    path:'search/:query'
  },{
    component:ProductDetailsComponent,
    path:'details/:productId'
  },{
    component:UserAuthComponent,
    path:'user-auth'
  },{
    component:CartPageComponent,
    path:'cart-page'
  },{
    component:CheckoutComponent,
    path:'checkout'
  },{
    component:MyOrdersComponent,
    path:'my-orders'
  },
  {
  path: 'category/:category',
  component: CategoryComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
