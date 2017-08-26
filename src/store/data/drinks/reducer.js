import {SET_LOADING, ATTACH_DRINKS} from '../../actionTypes'

import {handleActions} from 'redux-actions'

const defaultState = {
  data: undefined,
  loading: false
}

const drinksReducer = handleActions({
  [SET_LOADING]: (state, {payload}) => ({...state, loading: payload}),
  [ATTACH_DRINKS]: (state, {payload}) => ({...state, data: payload})
}, defaultState)

export default drinksReducer