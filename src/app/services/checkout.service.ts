import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { IItem, TCheckout, CheckoutItem, ICheckoutItem, IStore, StoreAction } from '~models'
import { checkoutActionType } from '~reducers';

@Injectable()
export class CheckoutService {
    constructor(
        private store: Store<IStore>,
    ){}

    add(item: IItem) {
        this.store.dispatch(
          new StoreAction<checkoutActionType>(
            checkoutActionType.add, 
            item
        ))
      }
    
      remove(itemId: string) {
        this.store.dispatch(
          new StoreAction<checkoutActionType>(
            checkoutActionType.remove,
            itemId
        ))
      }
    
      clear() {
        this.store.dispatch(
          new StoreAction<checkoutActionType>(
            checkoutActionType.clear
        ))
      }
}