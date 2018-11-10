import { Injectable } from '@angular/core'
import { webSocket, WebSocketSubject } from 'rxjs/webSocket'
import { filter } from 'rxjs/operators';
import { IWebsocketEvent, WebsocketEventType } from '~models'

@Injectable()
export class WebsocketService {
    private connection: WebSocketSubject<IWebsocketEvent>
   
    constructor(){
        this.connection = webSocket({
            url: 'ws://demos.kaazing.com/echo'
        })
    }

    send(event: IWebsocketEvent) {
        this.connection.next(event);
    }

    event(eventName: WebsocketEventType) {
        if (eventName === WebsocketEventType._all) {
            return this.connection
        }

        return this.connection
            .pipe(
                filter(data => data.event === eventName)
            )
    }
}