export interface IWebsocketEvent {
    event: WebsocketEventType;
    amount: number;
}

export enum WebsocketEventType {
    _all = '_all',
    charge = 'charge'
}

export class WebsocketEvent implements IWebsocketEvent {
    event: WebsocketEventType;
    amount: number;

    constructor(
        event: WebsocketEventType,
        amount: number
    ) {
        this.event = event
        this.amount = amount
    }
}