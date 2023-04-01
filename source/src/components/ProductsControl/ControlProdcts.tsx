import { IProduct } from 'models'
import { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import useDeleteProduct from '@/hooks/useDeleteProduct'

import { selectProductsData } from '@/store/reducers/productsReducer'

import ModalProductSettings from '../Modal/ModalProductSettings'
import Icon from '../ui/Icons/Icon'

const ControlProdcts = () => {
	const products = useSelector(selectProductsData)

	const [searchText, setSearchText] = useState<string>('')
	const [currentBarcode, setCurrentBarcode] = useState<string>('')

	const [isSettings, setIsSettings] = useState<boolean>(false)

	const [currentProduct, setCurrentProduct] = useState<IProduct>()

	const deleteProduct = useDeleteProduct(currentBarcode)

	const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchText(event.target.value)
	}

	const filteredProducts = products.filter(
		(item) =>
			item.title.toLowerCase().includes(searchText.toLowerCase()) ||
			item.barcode.toLowerCase().includes(searchText.toLowerCase())
	)

	const handleSettingsClick = (item: IProduct | undefined) => {
		setIsSettings(!isSettings)
		setCurrentProduct(item)
	}

	const onDeleteClick = (barcode: string) => {
		setCurrentBarcode(barcode)
	}

	useEffect(() => {
		deleteProduct()
	}, [currentBarcode])

	isSettings
		? document.documentElement.classList.add('overflow-hidden')
		: document.documentElement.classList.remove('overflow-hidden')

	return (
		<div>
			<h2 className="mb-5 font-semibold text-3xl text-center">
				Список товаров
			</h2>
			<div className="flex justify-center mb-5">
				<input
					type="text"
					placeholder="Поиск по названию или штрихкоду"
					value={searchText}
					onChange={handleSearchInputChange}
					className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-sm:placeholder:text-xs md:w-80"
				/>
			</div>
			<div className="px-8 pt-4 h-full max-h-[550px] overflow-y-auto border rounded-md border-gray-300">
				<ol className="list-decimal">
					{filteredProducts.map((item) => (
						<li key={item.barcode}>
							<div className="flex gap-3">
								<Link
									className="pl-1.5 py-0.5 flex flex-1 bg-white rounded-md hover:bg-gray-300"
									to={`/catalog/${item.barcode}`}
									target="_blank"
								>
									<div className="flex flex-col">
										<span className="line-clamp-1">{item.title}</span>
										<span className="font-light text-xs">{item.barcode}</span>
									</div>
								</Link>
								<span
									onClick={() => handleSettingsClick(item)}
									className="mt-1 h-max cursor-pointer text-slate-700"
								>
									<Icon name="MdSettings" />
								</span>
								<span
									onClick={() => onDeleteClick(item.barcode)}
									className="mt-1 h-max cursor-pointer text-slate-700"
								>
									<Icon name="FiTrash2" />
								</span>
							</div>
						</li>
					))}
				</ol>
			</div>
			{isSettings && (
				<ModalProductSettings
					currentProduct={currentProduct}
					onCloseClick={() => setIsSettings(false)}
				/>
			)}
		</div>
	)
}

export default ControlProdcts
