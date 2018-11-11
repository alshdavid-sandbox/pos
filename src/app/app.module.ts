import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { store } from './app.store'

import { AppComponent } from './app.component';

import * as COMPONENTS from '~components'
import * as SERVICES from '~services'
import * as PIPES from '~pipes'

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS.IconComponent,
    COMPONENTS.ButtonComponent,
    COMPONENTS.CheckoutPanelComponent,
    COMPONENTS.CheckoutItemComponent,
    COMPONENTS.CheckoutItemHeadingComponent,
    COMPONENTS.ShopItemComponent,
    PIPES.ObjectTransform,
    PIPES.Currency
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(store),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    SERVICES.ItemsService,
    SERVICES.CheckoutService,
    SERVICES.WebsocketService,
    SERVICES.ChargeService,
    SERVICES.NoticeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private websocketService: SERVICES.WebsocketService,
    private chargeService: SERVICES.ChargeService
  ){}
}
