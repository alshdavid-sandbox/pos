import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-checkout-panel',
  templateUrl: './checkout-panel.component.html',
  styleUrls: ['./checkout-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutPanelComponent {
  @Input()
  public checkoutTotal = 0

  @Output()
  public onClear = new EventEmitter()

  @Output()
  public onCharge = new EventEmitter()
}
