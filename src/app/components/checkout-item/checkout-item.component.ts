import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutItemComponent {
  @Input()
  public id

  @Input()
  public title

  @Input()
  public qty

  @Input()
  public price

  @Output()
  public onRemove = new EventEmitter()

  @Output()
  public onQty = new EventEmitter()
}
