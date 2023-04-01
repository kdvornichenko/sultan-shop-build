import { productsSlice } from '../slices/productsSlice'
import { RootState } from '../types'

export const selectProductsData = (state: RootState) => state.products.data

export const selectProductsLoading = (state: RootState) =>
	state.products.loading

export const selectFilteredProducts = (state: RootState) =>
	state.products.filteredData

export const selectFilteredByPriceProducts = (state: RootState) =>
	state.products.filteredByPriceData

export const selectFilteredByManufacturerProducts = (state: RootState) =>
	state.products.filteredByManufacturerData

export const selectFilteredByTypeProducts = (state: RootState) =>
	state.products.filteredByTypeData

export const selectManufacturerFilter = (state: RootState) =>
	state.products.manufacturerFilter

export const selectCurrentProductBarcode = (state: RootState) =>
	state.products.currentProductBarcode

export const selectCurrentProductTitle = (state: RootState) =>
	state.products.currentProductTitle

export const selectProductsInCart = (state: RootState) =>
	state.products.productsInCart

export const selectCartProductsAmount = (state: RootState) =>
	state.products.cartProductsAmount

export const selectNewTypeOfCareOptions = (state: RootState) =>
	state.products.typeOfCareOptions

export default productsSlice.reducer
