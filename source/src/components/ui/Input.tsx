import { IInput } from 'models'
import { FC } from 'react'

import Icon from './Icons/Icon'

const Input: FC<IInput> = ({
	placeholder,
	icon,
	iconSize,
	className,
	handleSearchChange,
}) => {
	return (
		<div className={className}>
			<input
				type="text"
				placeholder={placeholder}
				onChange={handleSearchChange}
			/>
			<div>
				<Icon name={icon} size={iconSize} />
			</div>
		</div>
	)
}

export default Input
