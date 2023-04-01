import { FC } from 'react'
import { Link } from 'react-router-dom'

import Drawer from './Drawer'
import Button from '@/components/ui/Buttons/Button'
import HeaderHorizontalDivider from '@/components/ui/HeaderHorizontalDivider'
import Input from '@/components/ui/Input'
import SvgDivider from '@/components/ui/Svg/SvgDivider'

const MobileMenu: FC<{ menuIsOpen: boolean }> = ({ menuIsOpen }) => {
	return (
		<div className="absolute">
			<HeaderHorizontalDivider />

			<div className="flex items-center justify-between bg-white relative z-10">
				<Link to="/catalog" className="w-1/2">
					<Button
						text="Каталог"
						icon="MdOutlineGridView"
						iconSize="1rem"
						className="btn-header-mobile w-full"
						variant="catalog-mobile"
					/>
				</Link>

				<SvgDivider height={30} />

				<Input
					placeholder="Поиск"
					icon="MdOutlineSearch"
					iconSize="1rem"
					className="input-search-mobile"
				/>
			</div>
			<HeaderHorizontalDivider />
			<Drawer menuIsOpen={menuIsOpen} />
		</div>
	)
}

export default MobileMenu
