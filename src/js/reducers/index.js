import { combineReducers } from 'redux'
import videoListReducer from './videoListReducer'
import selectVideoReducer from './selectedVideoReducer'

const rootReducers = combineReducers({
  videoList: videoListReducer,
  selectVideo: selectVideoReducer, 
})

export default rootReducers