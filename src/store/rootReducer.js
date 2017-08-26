import {combineReducers} from 'redux'

import layout from './data/layout/reducer'
import drinks from './data/drinks/reducer'

const rootReducer = combineReducers({
  layout,
  drinks
})

export default rootReducer