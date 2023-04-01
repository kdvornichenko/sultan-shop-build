import { IProduct } from 'models'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'

import {
	selectFilteredProducts,
	selectProductsLoading,
} from '@/store/reducers/productsReducer'

import Empty from '../Empty'
import Icon from '../ui/Icons/Icon'
import ProductCard from '../ui/ProductCard/ProductCard'

import CardSkeleton from './CardSkeleton'

const Products = () => {
	const isLoading = useSelector(selectProductsLoading)
	const products = useSelector(selectFilteredProducts)

	const [currentPage, setCurrentPage] = useState<number>(0)
	const [isAnyProducts, setIsAnyProducts] = useState<boolean>(true)

	const productsPerPage: number = 9
	const pageCount: number = Math.ceil(products.length / productsPerPage)

	const handlePageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected)
		window.scrollTo(0, 0)
	}

	const displayedProducts = products.slice(
		currentPage * productsPerPage,
		(currentPage + 1) * productsPerPage
	)

	useEffect(() => {
		if (displayedProducts.length === 0) {
			setIsAnyProducts(false)
		} else {
			setIsAnyProducts(true)
		}
	}, [displayedProducts])

	return (
		<>
			{isLoading && (
				<>
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
				</>
			)}

			{!isAnyProducts && (
				<Empty text="По заданным параметрам ничего не найдено" />
			)}

			{displayedProducts?.map((item: IProduct) => (
				<ProductCard key={item.barcode} product={item} />
			))}

			{isAnyProducts && (
				<ReactPaginate
					previousLabel={<Icon name="MdArrowBackIos" size="1.5rem" />}
					nextLabel={<Icon name="MdArrowForwardIos" size="1.5rem" />}
					breakLabel={'...'}
					pageCount={pageCount}
					onPageChange={handlePageChange}
					containerClassName={'pagination'}
					activeClassName={'active'}
				/>
			)}
		</>
	)
}

export default Products
