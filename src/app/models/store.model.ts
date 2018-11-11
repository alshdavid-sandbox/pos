import { IItem } from "./item.model";
import { TCheckout } from "./checkout-item.model";

export interface IStoreAction<T> {
    type: T,
    payload?: any
}

export type reducerFunction<T, Y> = (state: T, action: Y) => T

export type actionFunction<T> = (newState: T, payload: any) => T

export class StoreAction<T> implements IStoreAction<T> {
    type: T
    payload: any

    constructor(
        type: T,
        payload?: any
    ) {
        this.type = type
        this.payload = payload
    }
}

export enum Selector {
    products = 'products',
    checkout = 'checkout'
}

export interface IStore {
    products: IItem[],
    checkout: TCheckout
}
