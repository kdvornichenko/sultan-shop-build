import { IProduct } from 'models'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import useDeleteProduct from '@/hooks/useDeleteProduct'

import {
	selectCurrentProductBarcode,
	selectProductsData,
	selectProductsInCart,
} from '@/store/reducers/productsReducer'
import {
	setCurrentProductBarcode,
	setCurrentProductTitle,
} from '@/store/slices/productsSlice'

import ModalProductSettings from '@/components/Modal/ModalProductSettings'
import Delivery from '@/components/ProductPage/Delivery'
import PriceList from '@/components/ProductPage/PriceList'
import Share from '@/components/ProductPage/Share'
import Button from '@/components/ui/Buttons/Button'
import Counter from '@/components/ui/Counter'
import Details from '@/components/ui/Details'
import Icon from '@/components/ui/Icons/Icon'
import ProductVolume from '@/components/ui/ProductCard/ProductVolume'
import ProductPicture from '@/components/ui/ProductPicture'
import SvgDivider from '@/components/ui/Svg/SvgDivider'
import { filterData } from '@/data/filter.data'

const ProductPage: FC = ({}) => {
	const dispatch = useDispatch()

	const cartData = useSelector(selectProductsInCart)
	const products = useSelector(selectProductsData)
	const barcode = useSelector(selectCurrentProductBarcode)

	const [countOfProducts, setCountOfProducts] = useState<number>(1)
	const [barcodeInUrl, setBarcodeInUrl] = useState<string | undefined>('')
	const [currentProduct, setCurrentProduct] = useState<IProduct>()
	const [isSettings, setIsSettings] = useState<boolean>(false)

	useEffect(() => {
		if (barcode) {
			setCurrentProduct(products.find((item) => item.barcode === barcode))
		} else {
			setBarcodeInUrl(window.location.hash.split('/').at(-1) ?? '')
		}
	}, [barcode, products])

	useEffect(() => {
		dispatch(setCurrentProductBarcode(barcodeInUrl))
		setCurrentProduct(products.find((item) => item.barcode === barcodeInUrl))
	}, [barcodeInUrl])

	useEffect(() => {
		dispatch(setCurrentProductTitle(currentProduct?.title))
	}, [currentProduct])

	const handleCountChange = (newCount: number) => {
		setCountOfProducts(newCount)
		const updatedCartData = cartData.map((product) => {
			if (product.barcode === currentProduct?.barcode) {
				return {
					...product,
					count: newCount,
				}
			}
			return product
		})
		localStorage.setItem('cartData', JSON.stringify(updatedCartData))
	}

	const handleSettingsClick = () => {
		setIsSettings(!isSettings)
		document.documentElement.classList.toggle('overflow-y-hidden')
	}

	const matchedFilters = filterData
		.filter((filter) => currentProduct?.typeOfCare.includes(filter.type))
		.map((filter) => filter.title)
		.join(', ')

	console.log(matchedFilters)

	const handleDeleteProduct = useDeleteProduct(currentProduct?.barcode)

	return (
		<div className="my-6 flex flex-col gap-4 md:gap-10 sm:flex-row sm:my-8 md:my-10 lg:my-12 xl:my-14 2xl:my-16">
			{/* Изображение товара */}
			<div className="w-full sm:max-w-xl">
				<ProductPicture productImg={currentProduct?.img} />
			</div>
			{/* Ифнормация о товаре */}
			<div className="w-full max-w-[640px]">
				{/* Наличие товара */}
				<div className="flex items-center justify-between">
					{currentProduct?.isInStock ? (
						<span className="text-green-500">В наличии</span>
					) : (
						<span className="text-red-500">Отсутствует</span>
					)}

					{/* Управоение товаром */}
					<div className="flex gap-1">
						{/* Редактирование */}
						{isSettings && (
							<ModalProductSettings
								currentProduct={currentProduct}
								onCloseClick={handleSettingsClick}
							/>
						)}
						<div
							onClick={handleSettingsClick}
							className="text-slate-700 cursor-pointer"
						>
							<Icon name="MdSettings" size="1.5rem" />
						</div>
						{/* Удаление */}
						<div
							onClick={handleDeleteProduct}
							className="text-red-500 cursor-pointer"
						>
							<Icon name="FiTrash" size="1.5rem" />
						</div>
					</div>
				</div>

				{/* Название товара */}
				<h1 className="mt-2.5 font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
					{currentProduct?.title}
				</h1>
				{/* Объем товара */}
				<div className="mt-2.5 flex gap-1.5 items-center">
					<ProductVolume
						volumeType={currentProduct?.volumeType}
						volume={currentProduct?.volume}
					/>
				</div>

				{/* Цена, счетчик, кнопка добавления в корзину */}
				<div className="mt-6 flex flex-col items-center gap-6 xl:gap-10 lg:flex-row">
					<div className="w-full flex gap-8">
						{/* Цена */}
						<span className="font-extrabold text-xl lg:text-2xl xl:text-3xl">
							{currentProduct?.price} ₸
						</span>

						{/* Счетчик */}
						<Counter
							onCountChange={handleCountChange}
							setCountOfProducts={setCountOfProducts}
							countOfProducts={countOfProducts}
						/>
					</div>

					{/* В корзину */}
					<div className="w-full flex justify-between items-center">
						<Button
							text="В КОРЗИНУ"
							icon="FiShoppingCart"
							iconSize="1.5rem"
							className="btn-tocard w-44 h-15"
							variant="to-card"
							product={currentProduct}
							countOfProducts={countOfProducts}
						/>
						<div className="[&>div]:w-15 [&>div]:h-15 [&>div]:p-0 md:hidden">
							<Share />
						</div>
					</div>
				</div>

				{/* Поделиться, бесплатная доставка, прайс */}
				<div className="mt-5 flex flex-wrap items-center gap-2.5 text-slate-700 max-[490px]:flex-col sm:flex-col md:flex-row md:mt-8 lg:mt-12 xl:mt-15 ">
					<div className="hidden md:block md:max-xl:w-20">
						<Share />
					</div>
					<div className="min-[491px]:w-[48%] sm:w-full md:w-auto md:max-xl:flex-1">
						<Delivery />
					</div>
					<div className="w-full min-[491px]:w-[48%] sm:w-full xl:w-auto">
						<PriceList />
					</div>
				</div>

				{/* Основная инфа */}
				<div>
					<div className="mt-9">
						<ul className="font-light text-sm text-slate-700 [&>li]:mt-1.5 [&>li>span]:font-medium [&>li>span]:text-primary">
							<li>
								Производитель: <span>{currentProduct?.manufacturer}</span>
							</li>
							<li>
								Бренд: <span>{currentProduct?.brand}</span>
							</li>
							<li>
								Артикул: <span>{currentProduct?.vendorCode}</span>
							</li>
							<li>
								Штрихкод: <span>{currentProduct?.barcode}</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Описание товара */}
				<div className="mt-8">
					<Details title="Описание">{currentProduct?.description}</Details>
				</div>

				<div className="mt-5 max-w-xs">
					<SvgDivider height={1} width="100%" opacity={0.3} />
				</div>

				{/* Характеристики товара */}
				<div className="mt-8">
					<Details title="Характеристики">
						<ul className="font-light text-sm text-slate-700 [&>li]:mt-1.5 [&>li>span]:font-medium [&>li>span]:text-primary">
							<li>
								Назначение:
								<span> {matchedFilters}</span>
							</li>
							<li>
								Производитель: <span>{currentProduct?.manufacturer}</span>
							</li>
							<li>
								Бренд: <span>{currentProduct?.brand}</span>
							</li>
							<li>
								Артикул: <span>{currentProduct?.vendorCode}</span>
							</li>
							<li>
								Штрихкод: <span>{currentProduct?.barcode}</span>
							</li>
							<li>
								{currentProduct?.volumeType === 'weight' ? 'Вес' : 'Объем'}:
								<span>{' ' + currentProduct?.volume}</span>
							</li>
						</ul>
					</Details>
				</div>
			</div>
		</div>
	)
}

export default ProductPage
