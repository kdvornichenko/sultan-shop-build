import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
	selectCartProductsAmount,
	selectProductsInCart,
} from '@/store/reducers/productsReducer'
import {
	setCartProductsAmount,
	setProductsInCart,
} from '@/store/slices/productsSlice'

import Icon from '../ui/Icons/Icon'

const CartBlock = () => {
	const dispatch = useDispatch()
	const cartData = useSelector(selectProductsInCart)
	const cartProductsAmount = useSelector(selectCartProductsAmount)
	const [cartProductsCount, setCartProductsCount] = useState<number>(0)

	useEffect(() => {
		dispatch(
			setProductsInCart(JSON.parse(localStorage.getItem('cartData') || '[]'))
		)
	}, [])

	useEffect(() => {
		setCartProductsCount(
			cartData.reduce((acc, obj) => {
				if (obj.count) {
					return acc + obj.count
				}
				return acc
			}, 0)
		)

		dispatch(
			setCartProductsAmount(
				cartData.reduce((acc, obj) => {
					if (obj.count && obj.price) {
						return acc + obj.count * +obj.price
					}
					return acc
				}, 0)
			)
		)
	}, [cartData])

	return (
		<Link to={'/cart'}>
			<div className="flex items-center gap-6 group cursor-pointer md:ml-4">
				<div
					data-cartproductscount={cartProductsCount}
					className={`after:content-[attr(data-cartproductscount)] relative text-slate-700 group-hover:scale-105 transition after:absolute after:-top-2.5 after:-right-4 after:w-7 after:h-7 after:rounded-full after:bg-orange-500 after:border-3 after:border-white  after:text-white after:text-sm after:flex after:items-center after:justify-center after:transition`}
				>
					<Icon name="FiShoppingCart" size="2rem" />
				</div>

				<div className="hidden md2:block">
					<div className="font-light text-xs text-slate-700">Корзина</div>
					<div className="w-14 font-semibold text-sm group-hover:text-orange-700 transition">
						{cartProductsAmount}₸
					</div>
				</div>
			</div>
		</Link>
	)
}

export default CartBlock
