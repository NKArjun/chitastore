import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NewOrderComponent } from './components/orders/new-order/new-order.component';
import { YourOrdersComponent } from './components/orders/your-orders/your-orders.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'orders', component: OrdersComponent, children: [
      { path: 'new-order', component: NewOrderComponent },
      { path: 'your-orders', component: YourOrdersComponent }
    ]
  },
  {path:'chat-box',component:ChatBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
