import { IButton, ICartProduct } from 'models'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { setProductsInCart } from '@/store/slices/productsSlice'

import Icon from '../Icons/Icon'

const Button: FC<IButton> = ({
	text,
	icon,
	iconSize,
	className,
	variant,
	product,
	countOfProducts,
	setIsModalVisible,
}) => {
	const initialProductData = {
		img: { imgUrl: product?.img.imgUrl, isLocal: product?.img.isLocal },
		volume: product?.volume,
		volumeType: product?.volumeType,
		title: product?.title,
		description: product?.description,
		price: product?.price,
		barcode: product?.barcode,
		count: countOfProducts,
	}

	const dispatch = useDispatch()

	const handleButtonClick = () => {
		if (variant === 'to-card') {
			if (product?.isInStock) {
				const cartData = JSON.parse(localStorage.getItem('cartData') || '[]')
				const index = cartData.findIndex(
					(item: ICartProduct) => item.title === initialProductData.title
				)
				if (index === -1) {
					cartData.push(
						countOfProducts
							? { ...initialProductData, count: countOfProducts }
							: { ...initialProductData, count: 1 }
					)
				} else {
					countOfProducts
						? (cartData[index].count = countOfProducts)
						: cartData[index].count++
				}
				localStorage.setItem('cartData', JSON.stringify(cartData))
				dispatch(
					setProductsInCart(
						JSON.parse(localStorage.getItem('cartData') || '[]')
					)
				)
			}
			return
		}

		if (variant === 'send-order') {
			dispatch(setProductsInCart([]))
			localStorage.setItem('cartData', JSON.stringify([]))
			setIsModalVisible && setIsModalVisible(true)
		}
	}

	return (
		<button
			disabled={product ? (product?.isInStock ? false : true) : false}
			className={className}
			onClick={handleButtonClick}
		>
			<div>
				{product ? (product?.isInStock ? text : 'Нет в наличии') : text}
			</div>
			{icon && <Icon name={icon} size={iconSize} />}
		</button>
	)
}

export default Button
