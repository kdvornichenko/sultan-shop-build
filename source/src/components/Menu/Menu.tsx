import { locationData, mailData } from 'data/menuContactBlock.data'

import HeaderHorizontalDivider from '../ui/HeaderHorizontalDivider'
import SvgDivider from '../ui/Svg/SvgDivider'

import MenuContactBlock from './MenuContactBlock'
import MenuItems from './MenuItems'

const Menu = () => {
	return (
		<>
			<div className="relative flex justify-between md:py-3.5 md:px-4">
				<div className="flex items-start gap-2 flex-col md2:flex-row md2:items-center 2xl:gap-5">
					<MenuContactBlock item={locationData} />
					<div className="hidden md2:block">
						<SvgDivider height={39} />
					</div>
					<MenuContactBlock item={mailData} />
				</div>
				<nav className="flex items-center">
					<MenuItems />
				</nav>
			</div>
			<HeaderHorizontalDivider />
		</>
	)
}

export default Menu
