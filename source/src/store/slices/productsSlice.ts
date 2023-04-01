import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICartProduct, IFilterItem, IProduct } from 'models'

interface IProductsState {
	data: IProduct[]
	loading: boolean
	filteredData: IProduct[]
	manufacturerFilter: string[]
	currentProductTitle: string | undefined
	currentProductBarcode: string | undefined
	productsInCart: ICartProduct[]
	cartProductsAmount: number
	filteredByPriceData: IProduct[]
	filteredByManufacturerData: IProduct[]
	filteredByTypeData: IProduct[]
	typeOfCareOptions: IFilterItem[]
}

const initialState: IProductsState = {
	data: [],
	loading: true,
	filteredData: [],
	manufacturerFilter: [],
	currentProductTitle: '',
	currentProductBarcode: '',
	productsInCart: [],
	cartProductsAmount: 0,
	filteredByPriceData: [],
	filteredByManufacturerData: [],
	filteredByTypeData: [],
	typeOfCareOptions: [],
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProductsData: (state, action: PayloadAction<IProduct[]>) => {
			state.data = action.payload
			state.loading = false
		},
		setProductsLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
		setFilteredProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.filteredData = action.payload
		},
		setFilteredByPriceProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.filteredByPriceData = action.payload
		},
		setFilteredByManufacturerProducts: (
			state,
			action: PayloadAction<IProduct[]>
		) => {
			state.filteredByManufacturerData = action.payload
		},
		setFilteredByTypeProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.filteredByTypeData = action.payload
		},
		clearFilteredProducts: (state) => {
			state.filteredData = state.data
		},
		setManufacturerFilter: (state, action: PayloadAction<string>) => {
			const index = state.manufacturerFilter.indexOf(action.payload)
			if (index === -1) {
				state.manufacturerFilter.push(action.payload)
			} else {
				state.manufacturerFilter.splice(index, 1)
			}
		},
		setCurrentProductTitle: (
			state,
			action: PayloadAction<string | undefined>
		) => {
			state.currentProductTitle = action.payload
		},
		setCurrentProductBarcode: (
			state,
			action: PayloadAction<string | undefined>
		) => {
			state.currentProductBarcode = action.payload
		},
		deleteCurrentProduct: (state, action: PayloadAction<string>) => {
			state.data = state.data.filter(
				(product) => product.barcode !== action.payload
			)
		},
		setProductsInCart: (state, action: PayloadAction<ICartProduct[]>) => {
			state.productsInCart = action.payload
		},
		setCartProductsAmount: (state, action: PayloadAction<number>) => {
			state.cartProductsAmount = action.payload
		},
		setNewTypeOfCareOptions: (state, action: PayloadAction<IFilterItem[]>) => {
			state.typeOfCareOptions = action.payload
		},
	},
})

export const {
	setProductsData,
	setProductsLoading,
	setFilteredProducts,
	clearFilteredProducts,
	setManufacturerFilter,
	setCurrentProductBarcode,
	deleteCurrentProduct,
	setProductsInCart,
	setCartProductsAmount,
	setCurrentProductTitle,
	setFilteredByPriceProducts,
	setFilteredByManufacturerProducts,
	setFilteredByTypeProducts,
	setNewTypeOfCareOptions,
} = productsSlice.actions
