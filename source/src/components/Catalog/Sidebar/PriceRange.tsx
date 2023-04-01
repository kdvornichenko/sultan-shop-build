import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectProductsData } from '@/store/reducers/productsReducer'
import { setFilteredByPriceProducts } from '@/store/slices/productsSlice'

const PriceRange = () => {
	const dispatch = useDispatch()
	const products = useSelector(selectProductsData)
	const [priceMin, setPriceMin] = useState<string>('')
	const [priceMax, setPriceMax] = useState<string>('')

	const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.name === 'priceMin') {
			setPriceMin(event.target.value)
		} else {
			setPriceMax(event.target.value)
		}
	}

	useEffect(() => {
		const priceFilteredProducts = products.filter(
			(item) =>
				(priceMin === '' || Number(item.price) >= Number(priceMin)) &&
				(priceMax === '' || Number(item.price) <= Number(priceMax))
		)

		dispatch(setFilteredByPriceProducts(priceFilteredProducts))
	}, [priceMin, priceMax, products])

	return (
		<>
			<div className="text-sm">
				<span className="mr-1.5 font-light text-slate-700">Цена</span>
				<span className="font-medium">₸</span>
			</div>
			<div className="mt-4 flex items-center gap-2.5">
				<input
					type="number"
					className="price-range"
					placeholder="0"
					onChange={handlePriceChange}
					name="priceMin"
					value={priceMin}
				/>
				{/* Наименьшая цена */}
				-
				<input
					type="number"
					className="price-range"
					placeholder="0"
					onChange={handlePriceChange}
					name="priceMax"
					value={priceMax}
				/>
				{/* Наибольшая цена */}
			</div>
		</>
	)
}

export default PriceRange
