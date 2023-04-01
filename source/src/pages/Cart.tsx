import { ICartProduct } from 'models'
import { Dispatch, SetStateAction, useState } from 'react'
import { useSelector } from 'react-redux'

import {
	selectCartProductsAmount,
	selectProductsInCart,
} from '@/store/reducers/productsReducer'

import CartProduct from '@/components/Cart/CartProduct'
import Empty from '@/components/Empty'
import ModalOrderSuccess from '@/components/Modal/ModalOrderSuccess'
import Button from '@/components/ui/Buttons/Button'
import SvgDivider from '@/components/ui/Svg/SvgDivider'

const Cart = () => {
	const cartData = useSelector(selectProductsInCart)
	const cartProductsAmount = useSelector(selectCartProductsAmount)
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	return (
		<div className="mt-6">
			<h1 className="default-h1">Корзина</h1>
			<div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12">
				<SvgDivider height={1} width={'100%'} opacity={0.3} />
				{cartData.length === 0 ? (
					<Empty text="Ваша корзина пуста" />
				) : (
					<>
						{cartData.map((item: ICartProduct) => (
							<div
								key={item.title}
								className="mt-5 sm:mt-7 md:mt-9 lg:mt-11 xl:mt-12"
							>
								<CartProduct cartData={cartData} item={item} />
								<div className="mt-5 sm:mt-7 md:mt-9 lg:mt-11 xl:mt-12">
									<SvgDivider height={1} width={'100%'} opacity={0.3} />
								</div>
							</div>
						))}

						<div className="flex items-center justify-between mt-6 max-sm:flex-col-reverse max-sm:gap-6 sm:mt-8 md:mt-10 lg:mt-14 xl:mt-16 2xl:mt-[70px]">
							<Button
								text="Оформить заказ"
								className="btn-header px-2 max-sm:w-full max-w-xs"
								variant="send-order"
								setIsModalVisible={setIsModalVisible}
							/>
							<div className="text-3xl font-bold">{cartProductsAmount}₸</div>
						</div>
					</>
				)}
			</div>
			{isModalVisible && (
				<ModalOrderSuccess setIsModalVisible={setIsModalVisible} />
			)}
		</div>
	)
}

export default Cart
