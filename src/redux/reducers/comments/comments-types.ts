




export enum ActionNamesType {
    SET_ITEMS = 'comments/SET_ITEMS',
    SET_IS_LOADING = 'comments/SET_IS_LOADING',
}


export const initialState: InitialStateType = {
    items: [] as any,
    isLoading: false
}


export type InitialStateType = {
    items: any
    isLoading: boolean

}



export type SetItemsType = {
    type:ActionNamesType.SET_ITEMS
    payload:any[]
}
export type SetIsLoading = {
    type:ActionNamesType.SET_IS_LOADING
    payload:boolean
}


export type ActionsType = SetItemsType | SetIsLoading