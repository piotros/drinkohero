import {OPEN_DRAWER, CLOSE_DRAWER} from '../../actionTypes'
import {createAction} from 'redux-actions'

export const openDrawer = createAction(OPEN_DRAWER)
export const closeDrawer = createAction(CLOSE_DRAWER)
