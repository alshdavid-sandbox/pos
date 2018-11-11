import { ActionReducerMap } from '@ngrx/store'
import { IStore } from '~models';
import { productsReducer, checkoutReducer } from '~reducers'

export const store: ActionReducerMap<IStore> = {
    products: productsReducer,
    checkout: checkoutReducer
}