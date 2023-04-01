import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	selectFilteredByManufacturerProducts,
	selectFilteredByPriceProducts,
	selectFilteredByTypeProducts,
	selectProductsData,
} from '@/store/reducers/productsReducer'
import { setFilteredProducts } from '@/store/slices/productsSlice'

const useCompareAndFilterProducts = () => {
	const dispatch = useDispatch()
	const products = useSelector(selectProductsData)
	const productsByPrice = useSelector(selectFilteredByPriceProducts)
	const productsByManufacturer = useSelector(
		selectFilteredByManufacturerProducts
	)
	const productsByType = useSelector(selectFilteredByTypeProducts)

	useLayoutEffect(() => {
		let filteredProducts = []

		// Ищем товары, которые есть во всех массивах
		if (
			productsByPrice.length > 0 &&
			productsByManufacturer.length > 0
			// productsByType.length > 0
		) {
			for (const product of productsByPrice) {
				if (
					productsByManufacturer.find((p) => p.barcode === product.barcode) &&
					productsByType.find((p) => p.barcode === product.barcode)
				) {
					filteredProducts.push(product)
				}
			}
			// } else if (productsByPrice.length > 0) {
			// 	filteredProducts = productsByPrice
			// } else if (productsByManufacturer.length > 0) {
			// 	filteredProducts = productsByManufacturer
			// } else if (productsByType.length > 0) {
			// 	filteredProducts = productsByType
			// } else {
			// 	filteredProducts = products
		}

		dispatch(setFilteredProducts(filteredProducts))
	}, [products, productsByPrice, productsByManufacturer, productsByType])
}

export default useCompareAndFilterProducts
