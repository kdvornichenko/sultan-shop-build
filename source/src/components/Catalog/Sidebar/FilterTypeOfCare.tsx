import { filterData } from 'data/filter.data'
import { IFilterItem, IProduct } from 'models'
import { ChangeEvent, FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { selectProductsData } from '@/store/reducers/productsReducer'
import { setFilteredByTypeProducts } from '@/store/slices/productsSlice'

import { FiltersState } from '@/types/filter.types'

const Filter: FC<{
	filters: FiltersState
	setFilters: (filters: FiltersState) => void
}> = ({ filters, setFilters }) => {
	const savedOptions = localStorage.getItem('typeOfCareOptions')
	const filteredTypesOfCareData = savedOptions
		? JSON.parse(savedOptions)
		: [...filterData]

	const products = useSelector(selectProductsData)
	const dispatch = useDispatch()

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const checked = event.target.checked
		setFilters({ ...filters, [value]: checked })
	}

	useEffect(() => {
		let filtered: IProduct[] = products ?? []
		for (let key in filters) {
			if (filters[key]) {
				filtered = filtered.filter((product: IProduct) =>
					product.typeOfCare.includes(key)
				)
			}
		}
		dispatch(setFilteredByTypeProducts(filtered))
	}, [filters, products, dispatch])

	return (
		<>
			{filteredTypesOfCareData.map((item: IFilterItem) => (
				<label key={item.type}>
					<span>{item.title}</span>
					<input
						type="checkbox"
						value={item.type}
						checked={filters[item.type] || false}
						onChange={handleFilterChange}
					/>
					<span />
				</label>
			))}
		</>
	)
}

export default Filter
