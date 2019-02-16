export type checkout = Record<string, ICheckoutItem>

export interface ICheckoutItem {
    qty: number
    id: string
    title: string
    price: number
}

export class CheckoutItem implements ICheckoutItem {
    qty: number
    id: string
    title: string
    price: number
    
    constructor(
        id: string = '',
        title: string= '',    
        price: number = 0,
        qty: number = 0
    ) {
        this.qty = qty
        this.id = id
        this.title = title
        this.price = price
    }
}