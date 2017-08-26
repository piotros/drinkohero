import {
  OPEN_DRAWER,
  CLOSE_DRAWER,
  SHOW_ADD_DIALOG,
  HIDE_ADD_DIALOG
} from '../../actionTypes'

import { handleActions } from 'redux-actions'

const defaultState = {
  isDrawerOpened: false,
  isAddDialogShown: false
}

const layoutReducer = handleActions(
  {
    [OPEN_DRAWER]: state => ({ ...state, isDrawerOpened: true }),
    [CLOSE_DRAWER]: state => ({ ...state, isDrawerOpened: false }),
    [SHOW_ADD_DIALOG]: state => ({ ...state, isAddDialogShown: true }),
    [HIDE_ADD_DIALOG]: state => ({ ...state, isAddDialogShown: false })
  },
  defaultState
)

export default layoutReducer
