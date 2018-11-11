import { IItem, IStoreAction, actionFunction } from '~models'
import { cloneDeep } from 'lodash'

export enum productsActionType {
    set = '[Products] Set',
    add = '[Products] Add',
    remove = '[Products] Remove',
    clear = '[Products] Clear',
}

export function productsReducer(
    state: IItem[] = [], 
    action: IStoreAction<productsActionType>): IItem[] {
        const fn: actionFunction<IItem[]> = productsActions[action.type]
        if (!fn) {
            return state
        }
        const newState = cloneDeep(state)
        return fn(newState, action.payload)
    }

export const productsSetAction = (newState: IItem[], payload: IItem[]) => {
    return payload
}

export const productsAddAction = (newState: IItem[], payload: IItem) => {
    newState.push(payload)
    return newState
}

export const productsRemoveAction = (newState: IItem[], payload: string) => {
    return newState.filter(item => item.id !== payload)
}

export const productsClearAction = (newState: IItem[], payload: any) => {
    return newState
}

export const productsActions = {
    [productsActionType.set]: productsSetAction,
    [productsActionType.add]: productsAddAction,
    [productsActionType.remove]: productsRemoveAction,
    [productsActionType.clear]: productsClearAction
}