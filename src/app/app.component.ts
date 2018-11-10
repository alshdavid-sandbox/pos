import { Component } from '@angular/core';
import { TCheckout, IItem } from '~models'
import { ItemsService, CheckoutService, ChargeService } from '~services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: IItem[] = this.itemsService.getAll()
  public checkout: TCheckout = this.checkoutService.getCheckout()

  get checkoutTotal() {
    return this.checkoutService.total
  }

  constructor(
    private itemsService: ItemsService,
    private checkoutService: CheckoutService,
    private chargeService: ChargeService
  ) { }

  addItemToCheckout(item: IItem, qty = 1) {
    this.checkoutService.add(item, qty)
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
