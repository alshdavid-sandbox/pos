import { Injectable } from '@angular/core'
import { IItem, TCheckout, CheckoutItem, ICheckoutItem } from '~models'

@Injectable()
export class CheckoutService {
    public total: number = 0
    private checkout:TCheckout = {}

    getCheckout() {
        return this.checkout
    }

    add(item: IItem, qty: number = 1) {
        if (!this.checkout[item.id]) {
            this.checkout[item.id] = new CheckoutItem(item.id, item.title, item.price)
        }
        this.checkout[item.id].qty += qty
        this.total = this.calculateTotal()
    }

    remove(itemId) {
        delete this.checkout[itemId]
        this.total = this.calculateTotal()
    }

    clear() {
        Object
            .keys(this.checkout)
            .forEach(key => delete this.checkout[key])
            
        this.total = this.calculateTotal()
    }

    calculateTotal(): number {
        return Object
            .values(this.checkout)
            .reduce((p:number, c:ICheckoutItem) => p += (c.price * c.qty), 0)
    }
}