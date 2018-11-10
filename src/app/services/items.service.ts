import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IItem } from '~models'

@Injectable()
export class ItemsService {
    private items: IItem[] = []

    constructor(
        private ngHttp: HttpClient
    ){
        this.ngHttp.get('/assets/items.json')
            .subscribe((data:any) => {
                data.forEach(item => this.items.push(item))
            })
    }

    getAll(): IItem[] {
        return this.items
    }
}