import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Selector, IStore, TCheckout, IItem, ICheckoutItem } from '~models'
import { ItemsService, CheckoutService, ChargeService } from '~services'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public subscriptions = new Subscription()
  public items: IItem[] = []
  public checkout: TCheckout = {}

  get checkoutTotal() {
    return Object
      .values(this.checkout)
      .reduce((p:number, c:ICheckoutItem) => p += (c.price * c.qty), 0)
  }

  constructor(
    private store: Store<IStore>,
    private itemsService: ItemsService,
    private checkoutService: CheckoutService,
    private chargeService: ChargeService
  ) { }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  ngOnInit() {
    this.subscriptions.add(  
      this.store
        .select(Selector.products)
        .subscribe(products => this.items = products))

    this.subscriptions.add(  
      this.store
        .select(Selector.checkout)
        .subscribe(checkout => this.checkout = checkout))
  }

  async ngAfterViewInit() {
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
