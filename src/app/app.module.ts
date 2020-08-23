import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OrdersComponent } from './components/orders/orders.component';
import { NewOrderComponent } from './components/orders/new-order/new-order.component';
import { YourOrdersComponent } from './components/orders/your-orders/your-orders.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrdersComponent,
    NewOrderComponent,
    YourOrdersComponent,
    ChatBoxComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
