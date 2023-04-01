import { IProduct } from 'models'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { setCurrentProductBarcode } from '@/store/slices/productsSlice'

import Button from '../Buttons/Button'
import ProductPicture from '../ProductPicture'

import ProductVolume from './ProductVolume'

const ProductCard: FC<{ product?: IProduct }> = ({ product }) => {
	const dispatch = useDispatch()

	const handleProductClick = () => {
		dispatch(setCurrentProductBarcode(product?.barcode))
	}

	return (
		<div className="px-4 py-7 w-full max-w-[290px] bg-white rounded-xl transition shadow-md hover:shadow-xl sx:max-w-[48%] md:px-6 lg:max-w-[32%] 2xl:max-w-xs">
			<div className="relative">
				{product?.label && (
					<div className="bg-green-500 absolute top-0 left-0 px-2 py-1 rounded-md font-semibold text-xs text-white uppercase tracking-wider">
						{product?.label}
					</div>
				)}
				<div className="w-64 h-64 mx-auto sx:w-40 sx:h-40 sm:w-50 sm:h-50">
					<ProductPicture productImg={product?.img} />
				</div>
				<div className="mt-1 flex items-center gap-2">
					<ProductVolume
						volumeType={product?.volumeType}
						volume={product?.volume}
					/>
				</div>
				<Link to={`/catalog/${product?.barcode}`}>
					<h4
						className="mt-2.5 font-medium line-clamp-3 h-[72px]"
						onClick={handleProductClick}
					>
						{product?.title}
					</h4>
				</Link>
				<div className="mt-5">
					<ul className="font-light text-sm text-slate-700 [&>li]:mt-1.5 [&>li]:line-clamp-1 [&>li>span]:font-medium [&>li>span]:text-primary">
						<li>
							Штрихкод: <span>{product?.barcode}</span>
						</li>
						<li>
							Производитель: <span>{product?.manufacturer}</span>
						</li>
						<li>
							Бренд: <span>{product?.brand}</span>
						</li>
					</ul>
				</div>
				<div className="mt-4 flex items-center justify-between gap-2">
					<span className="w-1/3 font-bold text-base sx:text-sm sm:text-base">
						{product?.price} ₸
					</span>
					<Button
						text="В КОРЗИНУ"
						icon="FiShoppingCart"
						iconSize="1.5rem"
						className="btn-tocard w-2/3"
						variant="to-card"
						product={product}
					/>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
