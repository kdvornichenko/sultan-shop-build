import { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { selectFilteredProducts } from '@/store/reducers/productsReducer'
import { setFilteredProducts } from '@/store/slices/productsSlice'

const Sort = () => {
	const dispatch = useDispatch()
	const [sortingOption, setSortingOption] = useState('1')
	const products = useSelector(selectFilteredProducts)

	const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
		setSortingOption(event.target.value)
		let sortedProducts = []
		switch (event.target.value) {
			case '1':
				sortedProducts = [...products].sort((a, b) =>
					a.title.toLowerCase().localeCompare(b.title)
				)
				break
			case '2':
				sortedProducts = [...products].sort((a, b) =>
					b.title.toLowerCase().localeCompare(a.title)
				)
				break
			case '3':
				sortedProducts = [...products].sort(
					(a, b) => parseFloat(a.price) - parseFloat(b.price)
				)
				break
			case '4':
				sortedProducts = [...products].sort(
					(a, b) => parseFloat(b.price) - parseFloat(a.price)
				)
				break
			default:
				sortedProducts = products
		}
		dispatch(setFilteredProducts(sortedProducts))
	}

	return (
		<div>
			<span className="font-medium">Сортировка:</span>
			<select
				className="text-slate-700"
				name="sort"
				id="sort"
				value={sortingOption}
				onChange={handleSort}
			>
				<option value="1">Название ⬇</option>
				<option value="2">Название ⬆</option>
				<option value="3">Цена ⬆</option>
				<option value="4">Цена ⬇</option>
			</select>
		</div>
	)
}

export default Sort
