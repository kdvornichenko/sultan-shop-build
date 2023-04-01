import { ICartProduct } from 'models'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setProductsInCart } from '@/store/slices/productsSlice'

const useCartData = (item: ICartProduct) => {
	const dispatch = useDispatch()
	const [countOfProducts, setCountOfProducts] = useState<number>()
	const [cartData, setCartData] = useState<ICartProduct[]>(
		JSON.parse(localStorage.getItem('cartData') || '[]')
	)

	useEffect(() => {
		const updatedCartData = cartData.map((product) => {
			if (product.title === item.title) {
				return {
					...product,
					count: countOfProducts,
				}
			}
			return product
		})
		setCartData(updatedCartData)
		localStorage.setItem('cartData', JSON.stringify(updatedCartData))
	}, [countOfProducts])

	useEffect(() => {
		dispatch(setProductsInCart(cartData))
	}, [cartData])

	return { countOfProducts, setCountOfProducts }
}

export default useCartData
