import {ActionTypeNames, SetVisibleRightMenu} from "./rightMenu-types";


export const rightMenuActions = {
    setVisible: (visible: boolean): SetVisibleRightMenu => ({
        type: ActionTypeNames.SET_VISIBLE_RIGHT_MENU,
        payload: visible
    })
}