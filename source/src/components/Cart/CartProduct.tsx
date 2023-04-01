import { ICartProduct } from 'models'
import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setProductsInCart } from '@/store/slices/productsSlice'

import Counter from '../ui/Counter'
import Icon from '../ui/Icons/Icon'
import ProductVolume from '../ui/ProductCard/ProductVolume'
import ProductPicture from '../ui/ProductPicture'
import SvgDivider from '../ui/Svg/SvgDivider'

const CartProduct: FC<{
	item: ICartProduct
	cartData: ICartProduct[]
}> = ({ item, cartData }) => {
	const dispatch = useDispatch()
	const [countOfProducts, setCountOfProducts] = useState<number>(0)

	useEffect(() => {
		item.count && setCountOfProducts(item.count)
	}, [item])

	const handleCountChange = (newCount: number) => {
		setCountOfProducts(newCount)
		const updatedCartData = cartData.map((product) => {
			if (product.title === item.title) {
				return {
					...product,
					count: newCount,
				}
			}
			return product
		})
		localStorage.setItem('cartData', JSON.stringify(updatedCartData))
		dispatch(
			setProductsInCart(JSON.parse(localStorage.getItem('cartData') || '[]'))
		)
	}

	const handleDeleteClick = () => {
		const updatedCartData = cartData.filter(
			(product: ICartProduct) => product.title !== item.title
		)
		localStorage.setItem('cartData', JSON.stringify(updatedCartData))
		dispatch(
			setProductsInCart(JSON.parse(localStorage.getItem('cartData') || '[]'))
		)
	}

	return (
		<div className="flex max-lg:flex-col items-center gap-5">
			{/* Изображение */}
			<div className="max-w-xs">
				<ProductPicture productImg={item.img} />
			</div>
			{/* Информация */}
			<div className="md:mr-5 xl:mr-15 2xl:mr-32">
				{/* Объем */}
				<div className="flex items-center gap-2">
					<ProductVolume volumeType={item.volumeType} volume={item.volume} />
				</div>
				{/* Название товара */}
				<Link to={`/catalog/${item.barcode}`}>
					<h2 className="mt-2 font-bold text-xl md:text-2xl 2xl:text-3xl">
						{item.title}
					</h2>
				</Link>
				{/* Описание */}
				<p className="mt-2.5 line-clamp-4 font-light text-xs text-slate-700">
					{item.description}
				</p>
			</div>
			<div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8 xl:gap-10">
				<SvgDivider height={49} opacity={0.2} />
				{/* Счетчик */}
				<Counter
					countOfProducts={countOfProducts ?? 0}
					setCountOfProducts={setCountOfProducts}
					onCountChange={handleCountChange}
				/>
				<SvgDivider height={49} opacity={0.2} />
				{/* Цена товара с учетом количества */}
				<div className="w-10 text-center font-bold text-base sm:text-lg md:text-xl md:w-14 lg:text-xl lg:w-16 xl:text-2xl xl:w-20 2xl:w-24 2xl:text-3xl">
					{Number(item.price) * Number(countOfProducts)}₸
				</div>
				<SvgDivider height={49} opacity={0.2} />
				{/* Кнопка удаления */}
				<button
					onClick={handleDeleteClick}
					className="w-[59px] h-[59px] flex items-center justify-center text-white bg-orange-500 rounded-full cursor-pointer transition hover:bg-orange-700"
				>
					<Icon name="FiTrash2" size="1.5rem" />
				</button>
			</div>
		</div>
	)
}

export default CartProduct
