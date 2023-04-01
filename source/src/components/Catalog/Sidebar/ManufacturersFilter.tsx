import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import {
	selectManufacturerFilter,
	selectProductsData,
	selectProductsLoading,
} from '@/store/reducers/productsReducer'
import {
	setFilteredByManufacturerProducts,
	setManufacturerFilter,
} from '@/store/slices/productsSlice'

import Icon from '@/components/ui/Icons/Icon'
import Input from '@/components/ui/Input'

const ManufacturersFilter = () => {
	const dispatch = useDispatch()
	const selectedManufacturer = useSelector(selectManufacturerFilter)
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [visibleManufacturers, setVisibleManufacturers] = useState<number>(4)

	const productsData = useSelector(selectProductsData)
	const isLoading = useSelector(selectProductsLoading)

	useEffect(() => {
		let filtered = productsData ?? []
		if (selectedManufacturer.length > 0) {
			filtered = filtered.filter((product) =>
				selectedManufacturer.includes(product.manufacturer)
			)
		}
		dispatch(setFilteredByManufacturerProducts(filtered))
	}, [selectedManufacturer, productsData, dispatch])

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		dispatch(setManufacturerFilter(value))
	}

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const manufacturers = Array.from(
		new Set(productsData?.map((product) => product.manufacturer))
	)

	const filteredManufacturers = manufacturers.filter((manufacturer) => {
		return manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
	})

	const visibleManufacturersList = filteredManufacturers.slice(
		0,
		visibleManufacturers
	)
	const hiddenManufacturersList =
		filteredManufacturers.slice(visibleManufacturers)

	const handleShowMoreClick = () => {
		if (hiddenManufacturersList.length > 0) {
			setVisibleManufacturers(filteredManufacturers.length)
		} else {
			setVisibleManufacturers(4)
		}
	}

	return (
		<>
			{isLoading ? (
				<div className="w-full max-w-[260px]">
					<Skeleton borderRadius={80} height={60} />
					<div className="mt-4">
						<Skeleton count={4} />
					</div>
				</div>
			) : (
				<>
					<Input
						placeholder="Поиск..."
						className="input-search"
						icon="MdOutlineSearch"
						iconSize="1.5rem"
						handleSearchChange={handleSearchChange}
					/>
					<div className="mt-4 manufacturers-filter">
						{visibleManufacturersList.map((manufacturer) => (
							<label key={manufacturer} htmlFor={manufacturer}>
								<input
									type="checkbox"
									id={manufacturer}
									name="manufacturer"
									value={manufacturer}
									checked={selectedManufacturer.includes(manufacturer)}
									onChange={handleCheckboxChange}
								/>
								<span>{manufacturer}</span>
								<span>
									(
									{
										productsData?.filter((p) => p.manufacturer === manufacturer)
											.length
									}
									)
								</span>
							</label>
						))}
						<button
							onClick={handleShowMoreClick}
							className="w-max mt-2 ml-2 flex items-center gap-1 font-medium text-xs text-slate-700"
						>
							<span>
								{hiddenManufacturersList.length > 0
									? 'Показать все'
									: 'Свернуть'}
							</span>
							<span
								className={
									hiddenManufacturersList.length === 0 ? 'rotate-180' : ''
								}
							>
								<Icon name="MdArrowDropDown" size="1rem" />
							</span>
						</button>
					</div>
				</>
			)}
		</>
	)
}

export default ManufacturersFilter
