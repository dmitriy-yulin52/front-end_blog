import {ActionNamesType, SetIsLoading, SetItemsType} from "./comments-types";


export const commentsActions = {
    setItems: (items: any): SetItemsType => ({type: ActionNamesType.SET_ITEMS, payload: items}),
    setIsLoading: (isLoading: boolean): SetIsLoading => ({type: ActionNamesType.SET_IS_LOADING, payload: isLoading}),
}