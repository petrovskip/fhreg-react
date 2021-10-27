import { createStore } from 'redux'
import combinedReducer from '../features/slices/index'






const store = createStore(combinedReducer)
export default store
