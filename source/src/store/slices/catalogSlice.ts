import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'models'

import { FiltersState } from '@/types/filter.types'

interface CatalogState {
	productsData: IProduct[] | undefined
	filters: FiltersState
}

const initialState: CatalogState = {
	productsData: undefined,
	filters: {},
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setProductsData: (state, action: PayloadAction<IProduct[]>) => {
			state.productsData = action.payload
		},
		setFilters: (state, action: PayloadAction<FiltersState>) => {
			state.filters = action.payload
		},
	},
})

export const { setProductsData, setFilters } = catalogSlice.actions

export const catalogReducer = catalogSlice.reducer
