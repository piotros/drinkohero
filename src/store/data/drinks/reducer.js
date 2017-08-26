import {SET_LOADING, ATTACH_DRINKS} from '../../actionTypes'

import {handleActions} from 'redux-actions'

const defaultState = {
  list: undefined,
  loading: false
}

const blogReducer = handleActions({
  [SET_LOADING]: (state, {payload}) => ({...state, loading: payload}),
  [ATTACH_DRINKS]: (state, {payload}) => ({...state, list: payload})
}, defaultState)

export default blogReducer