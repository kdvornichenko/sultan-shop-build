import { ElementType } from 'react'
import FaTelegramPlane from 'react-icons/fa'
import FaRegFrown from 'react-icons/fa'
import FaWhatsapp from 'react-icons/fa'
import * as FeatherIcons from 'react-icons/fi'
import * as MaterialIcons from 'react-icons/md'

export type TypeIconName =
	| keyof typeof FeatherIcons
	| keyof typeof MaterialIcons
	| keyof typeof FaWhatsapp
	| keyof typeof FaTelegramPlane
	| keyof typeof FaRegFrown

export type IconsType = {
	[key: string]: ElementType
}
