import { Component } from '@angular/core';
import { selector, checkout, IItem, ICheckoutItem } from '~models'
import { ItemsService, CheckoutService, ChargeService } from '~services'
import { Select } from 'ngx-dux'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {  

  @Select(selector.products)
  public items: IItem[]

  @Select(selector.checkout)
  public set onCheckout(c: checkout) {
    this.checkout = c
    this.checkoutTotal = Object
      .values(c)
      .reduce<number>((p:number, c:ICheckoutItem) => p += (c.price * c.qty), 0)
  }
  
  public checkout: checkout
  public checkoutTotal: number

  constructor(
    private itemsService: ItemsService,
    private checkoutService: CheckoutService,
    private chargeService: ChargeService
  ) { }

  ngOnDestroy() {}

  async ngOnInit() {
    await this.itemsService.getProducts()
  }

  addItemToCheckout(item: IItem) {
    this.checkoutService.add(item)
  }

  removeItemFromCheckout(itemId: string) {
    this.checkoutService.remove(itemId)
  }

  clearCheckout() {
    this.checkoutService.clear()
  }

  chargeCheckout() {
    this.chargeService.charge(this.checkoutTotal)
  }
}
