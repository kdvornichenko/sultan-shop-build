import { FC } from 'react'

import Contacts from './Contacts'
import Overlay from './Overlay'
import MenuItems from '@/components/Menu/MenuItems'
import Button from '@/components/ui/Buttons/Button'
import SvgDivider from '@/components/ui/Svg/SvgDivider'

const Drawer: FC<{ menuIsOpen: boolean }> = ({ menuIsOpen }) => {
	return (
		<>
			<div
				className={
					(menuIsOpen ? 'mt-0' : '-mt-[720px]') +
					' ' +
					'px-4 relative overflow-hidden transition-all duration-500 z-0 bg-white'
				}
			>
				<div className="pt-5 pb-8">
					<Contacts />
					<SvgDivider height={2} width="100%" />
					<div className="mt-6">
						<h2 className="font-semibold text-xl text-slate-700">
							Меню сайта:
						</h2>
						<nav className="my-6">
							<MenuItems />
						</nav>
					</div>
					<Button
						text="Прайс-лист"
						icon="MdFileDownload"
						iconSize="1rem"
						className="btn-header w-full"
						variant=""
					/>
				</div>
			</div>
			<Overlay menuIsOpen={menuIsOpen} />
		</>
	)
}

export default Drawer
