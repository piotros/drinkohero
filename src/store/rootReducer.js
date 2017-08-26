import {combineReducers} from 'redux'

import drinks from './data/drinks/reducer'

const rootReducer = combineReducers({
  drinks
})

export default rootReducer