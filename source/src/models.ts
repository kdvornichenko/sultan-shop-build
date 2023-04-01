import { ChangeEvent, Dispatch, SetStateAction } from 'react'

import { TypeIconName } from '@/types/icon.types'

export interface IMenuContactBlock {
	link: string
	icon: TypeIconName
	title: string
	subtitle: string
}

export interface IIcon {
	name: TypeIconName
	size?: string
}

export interface IMenuNav {
	title: string
	link: string
}

export interface IButton {
	text: string
	icon?: TypeIconName
	iconSize?: string
	className: string
	variant: string
	product?: IProduct | undefined
	countOfProducts?: number
	link?: string
	setIsModalVisible?: Dispatch<SetStateAction<boolean>>
}

export interface IInput {
	placeholder: string
	icon: TypeIconName
	iconSize?: string
	className: string
	handleSearchChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface IFilterItem {
	title: string
	type: string
	isSelected: boolean
}

export interface IProductImg {
	isLocal: boolean
	imgUrl: string
}

export interface IProduct {
	id?: string
	img: IProductImg
	title: string
	volumeType: string
	volume: string
	barcode: string
	vendorCode: string
	manufacturer: string
	brand: string
	description: string
	price: string
	label?: string
	isInStock: boolean | null
	typeOfCare: string[]
}

export interface ICartProduct {
	img: IProductImg
	volume: string | undefined
	volumeType: string | undefined
	title: string | undefined
	description: string | undefined
	count?: number | undefined
	price: string | undefined
	barcode: string | undefined
}

export interface ManufacturerCheckboxProps {
	manufacturer: string
	count: number
	checked: boolean
	onChange: (checked: boolean) => void
	setCheckedState: Dispatch<SetStateAction<boolean[]>>
	index: number
}


