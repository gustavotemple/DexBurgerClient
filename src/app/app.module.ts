import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'orders',
    component: OrderComponent,
    data: { title: 'Lista de Pedidos' }
  },
  {
    path: 'order-details/:id',
    component: OrderDetailComponent,
    data: { title: 'Detalhes do Pedido' }
  },
  {
    path: 'order-add',
    component: OrderAddComponent,
    data: { title: 'Adicionar Pedido' }
  },
  {
    path: 'order-edit/:id',
    component: OrderEditComponent,
    data: { title: 'Editar Pedido' }
  },
  { path: '',
    redirectTo: '/orders',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderAddComponent,
    OrderDetailComponent,
    OrderEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
