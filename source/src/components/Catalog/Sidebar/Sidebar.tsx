import { FC, useState } from 'react'

import Sort from '../Sort'

import FilterTypeOfCare from './FilterTypeOfCare'
import ManufacturersFilter from './ManufacturersFilter'
import PriceRange from './PriceRange'
import Icon from '@/components/ui/Icons/Icon'
import SvgDivider from '@/components/ui/Svg/SvgDivider'
import { FiltersState } from '@/types/filter.types'

const Sidebar: FC<{
	filters: FiltersState
	setFilters: (filters: FiltersState) => void
}> = ({ filters, setFilters }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="catalog-sidebar">
			<div>
				<div onClick={handleClick} className="flex items-center gap-10">
					<h4 className="uppercase">Подбор по параметрам</h4>
					<div
						className={
							(isOpen ? '-rotate-90' : 'rotate-90') +
							' ' +
							'h-8 w-8 items-center justify-center bg-orange-200 rounded-full transition-all hidden max-md:flex'
						}
					>
						<Icon name="MdArrowForwardIos" size="1rem" />
					</div>
				</div>
				<div
					className={
						(isOpen ? 'h-[650px]' : 'max-md:h-0') +
						' ' +
						'transition-[height] max-md:overflow-hidden md:h-auto'
					}
				>
					<div className="mt-2.5">
						<PriceRange />
					</div>
					<div className="mt-7">
						<h2 className="font-medium">Производитель:</h2>
						<div className="mt-4">
							<ManufacturersFilter />
						</div>
					</div>
				</div>
				<div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10">
					<SvgDivider width={'100%'} height={1} opacity={0.3} />
				</div>
			</div>

			<div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10">
				<h4 className="uppercase max-md:hidden">Уход за телом</h4>
				<div className="sidebar-filter">
					<FilterTypeOfCare filters={filters} setFilters={setFilters} />
				</div>
			</div>
			<div className="hidden mt-6 max-md:block">
				<Sort />
			</div>
		</div>
	)
}

export default Sidebar
