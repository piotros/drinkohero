import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  SHOW_ADD_DIALOG,
  HIDE_ADD_DIALOG
} from '../../actionTypes'
import { createAction } from 'redux-actions'

export const openDrawer = createAction(OPEN_DRAWER)
export const closeDrawer = createAction(CLOSE_DRAWER)
export const showAddDialog = createAction(SHOW_ADD_DIALOG)
export const hideAddDialog = createAction(HIDE_ADD_DIALOG)
