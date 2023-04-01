import { useState } from 'react'
import { Link } from 'react-router-dom'

import useWindowSize from '@/hooks/useWindowSize'

import CatalogButton from '../ui/Buttons/CatalogButton'
import PriceListButton from '../ui/Buttons/PriceListButton'
import Input from '../ui/Input'
import SvgDivider from '../ui/Svg/SvgDivider'
import SvgLogo from '../ui/Svg/SvgLogo'

import CallBlock from './CallBlock'
import CartBlock from './CartBlock'
import Burger from './MobileMenu/Burger'
import MobileMenu from './MobileMenu/MobileMenu'

const Header = () => {
	const windowSize = useWindowSize()

	const [menuIsOpen, setMenuIsOpen] = useState(false)

	return (
		<header className="sticky w-screen ml-[calc(50%-50vw)] top-0 justify-between items-center bg-white shadow-md z-30 md:flex md:py-6">
			<div className="p-4 max-w-8xl mx-auto flex flex-1 justify-between items-center bg-white relative z-10 md:py-0">
				{!windowSize.isDesktop && (
					<Burger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
				)}

				<div className="flex-1 md:flex-none md:mr-1 lg:mr-9">
					<SvgLogo color="#3F4E65" />
				</div>

				{windowSize.isDesktop && (
					<div className="flex flex-1 items-center justify-between gap-1">
						<Link to="/catalog">
							<CatalogButton />
						</Link>
						<Input
							placeholder="Поиск..."
							icon="MdOutlineSearch"
							iconSize="1.5rem"
							className="input-search"
						/>

						<CallBlock />

						<div className="flex items-center gap-6">
							<PriceListButton />
							<SvgDivider height={49} />
						</div>
					</div>
				)}
				<CartBlock />
			</div>
			{!windowSize.isDesktop && <MobileMenu menuIsOpen={menuIsOpen} />}
		</header>
	)
}

export default Header
