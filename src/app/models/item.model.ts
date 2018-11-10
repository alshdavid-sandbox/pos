export interface IItem {
    id: string
    title: string
    description: string
    img: string
    price: number
}

export class Item implements IItem {
    id: string
    title: string
    description: string
    img: string
    price: number
}