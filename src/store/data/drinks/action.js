import {ATTACH_DRINKS, SET_LOADING} from '../../actionTypes'
import {createAction} from 'redux-actions'

export const attachDrinks = createAction(ATTACH_DRINKS)
export const setLoading = createAction(SET_LOADING)