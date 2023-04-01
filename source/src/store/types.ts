import { combineReducers } from '@reduxjs/toolkit'

import dataFetchReducer from './reducers/dataFetchReducer'
import productsReducer from './reducers/productsReducer'

const rootReducer = combineReducers({
	products: productsReducer,
	dataFetch: dataFetchReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
