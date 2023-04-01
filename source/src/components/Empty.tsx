import { FC } from 'react'

import Icon from './ui/Icons/Icon'

const Empty: FC<{ text: string }> = ({ text }) => {
	return (
		<div className="mt-12 flex flex-1 items-center gap-10 justify-center text-slate-700 text-xl md:mt-15 md:text-2xl lg:mt-16 lg:text-3xl xl:mt-20 xl:text-4xl 2xl:mt-24">
			{text}
			<Icon name="FaRegFrown" size="2rem" />
		</div>
	)
}

export default Empty
