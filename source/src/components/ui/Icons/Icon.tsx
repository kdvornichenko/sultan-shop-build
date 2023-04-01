import { IIcon } from 'models'
import { FC } from 'react'
import { FaRegFrown, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import * as FeatherIcons from 'react-icons/fi'
import * as MaterialIcons from 'react-icons/md'

import { IconsType } from '@/types/icon.types'

const Icon: FC<IIcon> = ({ name, size }) => {
	const icon: IconsType = {
		...MaterialIcons,
		...FeatherIcons,
		FaTelegramPlane,
		FaRegFrown,
		FaWhatsapp,
	}

	const IconComponent = name.includes('Md')
		? icon[name as keyof typeof MaterialIcons]
		: name.includes('Fi')
		? icon[name as keyof typeof FeatherIcons]
		: icon[
				(name as keyof typeof FaTelegramPlane,
				name as keyof typeof FaWhatsapp,
				name as keyof typeof FaRegFrown)
		  ]

	return <IconComponent size={size} />
}

export default Icon
