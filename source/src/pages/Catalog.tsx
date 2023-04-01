import { useCallback, useState } from 'react'

import useCompareAndFilterProducts from '@/hooks/useCompareAndFilterProducts'

import Products from '@/components/Catalog/Products'
import FilterTypeOfCare from '@/components/Catalog/Sidebar/FilterTypeOfCare'
import Sidebar from '@/components/Catalog/Sidebar/Sidebar'
import Sort from '@/components/Catalog/Sort'
import { FiltersState } from '@/types/filter.types'

const Catalog = () => {
	const [filters, setFilters] = useState<FiltersState>({})
	// Выбор одинаковых фильтров сверху и в сайдбаре
	const handleFilterChange = useCallback((filters: FiltersState) => {
		setFilters(filters)
	}, [])

	useCompareAndFilterProducts()

	return (
		<div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12">
			<div className="flex items-center justify-between">
				<h1 className="default-h1">Косметика и гигиена</h1>
				<div className="max-md:hidden">
					<Sort />
				</div>
			</div>

			<div className="mt-6 top-filter">
				<FilterTypeOfCare filters={filters} setFilters={handleFilterChange} />
			</div>

			<div className="mt-5 flex gap-2 sm:mt-6 max-md:flex-col md:mt-7 lg:mt-8 xl:mt-10 ">
				<div className="block lg:w-1/4">
					<Sidebar filters={filters} setFilters={handleFilterChange} />
				</div>
				<div className="w-full flex items-start justify-center flex-wrap gap-2 sx:justify-start lg:w-3/4 2xl:gap-6">
					<Products />
				</div>
			</div>
		</div>
	)
}

export default Catalog
