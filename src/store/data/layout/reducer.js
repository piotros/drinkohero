import {OPEN_DRAWER, CLOSE_DRAWER} from '../../actionTypes'

import {handleActions} from 'redux-actions'

const defaultState = {
  isDrawerOpened: false
}

const layoutReducer = handleActions({
  [OPEN_DRAWER]: state => ({...state, isDrawerOpened: true}),
  [CLOSE_DRAWER]: state => ({...state, isDrawerOpened: false})
}, defaultState)

export default layoutReducer