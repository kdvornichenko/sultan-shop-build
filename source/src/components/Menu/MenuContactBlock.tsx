import { IMenuContactBlock } from 'models'
import { FC } from 'react'

import Icon from '../ui/Icons/Icon'

const MenuContactBlock: FC<{ item: IMenuContactBlock }> = ({
	item: { link, icon, title, subtitle },
}) => {
	return (
		<div>
			<a className="group flex items-center gap-4" target="_blank" href={link}>
				<div className="[&>svg]:text-slate-700 group-hover:[&>svg]:text-orange-700 [&>svg]:transition-colors">
					<Icon name={icon} size="1.5rem" />
				</div>
				<div>
					<div className="font-semibold text-sm">{title}</div>
					<div className="font-light text-xs text-slate-700 whitespace-pre-line">
						{subtitle}
					</div>
				</div>
			</a>
		</div>
	)
}

export default MenuContactBlock
