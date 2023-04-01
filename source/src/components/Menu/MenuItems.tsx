import { navData } from 'data/menuNav.data'

import SvgDivider from '../ui/Svg/SvgDivider'

const MenuItems = () => {
	return (
		<ul className="flex flex-col gap-5 md:gap-2 md:flex-row xl:gap-4 2xl:gap-7">
			{navData.map((item) => (
				<li className="flex items-center [&>span]:last:hidden" key={item.title}>
					<a
						className="text-sm text-slate-700 transition hover:text-orange-700"
						href={item.link}
					>
						{item.title}
					</a>
					<span className="hidden md:block ml-2 xl:ml-4 2xl:ml-7">
						<SvgDivider height={39} />
					</span>
				</li>
			))}
		</ul>
	)
}

export default MenuItems
