import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store'
import { IItem, StoreAction, IStore } from '~models'
import { productsActionType } from '~reducers'

@Injectable()
export class ItemsService {
    private items: IItem[] = []

    constructor(
        private store: Store<IStore>,
        private ngHttp: HttpClient
    ){}

    async getProducts() {
        const data = await this.ngHttp.get<IItem[]>('/assets/items.json').toPromise()
        this.store.dispatch(new StoreAction<productsActionType>(productsActionType.set, data))
    }
}