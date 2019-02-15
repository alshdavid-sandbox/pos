import { ICheckoutItem, checkout, IStoreAction, actionFunction, CheckoutItem, IItem } from '~models'
import { cloneDeep } from 'lodash'

export enum checkoutActionType {
    add = '[checkout] Add',
    remove = '[checkout] Remove',
    clear = '[checkout] Clear',
}

export function checkoutReducer(
    state: checkout = {}, 
    action: IStoreAction<checkoutActionType>): checkout {
        const fn: actionFunction<checkout> = actions[action.type]
        if (!fn) {
            return state
        }
        const newState = cloneDeep(state)
        return fn(newState, action.payload)
    }

export const checkoutAddAction = (newState: checkout, payload: IItem) => {
    if (!newState[payload.id]) {
        newState[payload.id] = new CheckoutItem(
            payload.id, 
            payload.title, 
            payload.price
        )
    }
    newState[payload.id].qty += 1
    return newState
}

export const checkoutRemoveAction = (newState: checkout, payload: string) => {
    delete newState[payload]
    return newState
}

export const checkoutClearAction = (newState: checkout, payload: any) => {
    return {}
}

export const actions = {
    [checkoutActionType.add]: checkoutAddAction,
    [checkoutActionType.remove]: checkoutRemoveAction,
    [checkoutActionType.clear]: checkoutClearAction
}
