import { Injectable } from '@angular/core'
import { WebsocketService } from './websocket.service'
import { CheckoutService } from './checkout.service'
import { NoticeService } from './notice.service'
import { Subscription } from 'rxjs';
import { WebsocketEventType, WebsocketEvent } from '~models'

@Injectable()
export class ChargeService {
    private isSending: boolean = false
   
    constructor(
       private websocketService: WebsocketService,
       private checkoutService: CheckoutService,
       private noticeService: NoticeService

    ) { 
        websocketService
            .event(WebsocketEventType.charge)
            .subscribe(_ => this.onChargeEvent())
    }

    async onChargeEvent() {
        await this.noticeService.alert('Your charge has been successfully processed')
        window.print()
        this.checkoutService.clear()
        this.isSending = false
    }

    charge(amount) {
        if (this.isSending) {
            return
        }
        this.isSending = true
        this.websocketService.send(new WebsocketEvent(WebsocketEventType.charge, amount))
    }
}