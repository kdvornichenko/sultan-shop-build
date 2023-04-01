import { IProduct } from 'models'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { selectProductsData } from '@/store/reducers/productsReducer'
import {
	setIsError,
	setMessageAfterDataFetch,
} from '@/store/slices/dataFetchSlice'
import { deleteCurrentProduct } from '@/store/slices/productsSlice'

const useDeleteProduct = (barcode: string | undefined) => {
	const dispatch = useDispatch()
	const productsData = useSelector(selectProductsData)

	const deleteProduct = () => {
		const productToDelete = productsData.find(
			(product) => product.barcode === barcode
		)

		if (productToDelete) {
			const shouldDelete = window.confirm(
				'Вы уверены, что хотите удалить товар?'
			)

			if (shouldDelete) {
				const currentProductsData = JSON.parse(
					localStorage.getItem('productsData') || '[]'
				)

				const updatedProductsData = currentProductsData.filter(
					(product: IProduct) => product.barcode !== barcode
				)

				localStorage.setItem(
					'productsData',
					JSON.stringify(updatedProductsData)
				)

				dispatch(setIsError(false))
				dispatch(deleteCurrentProduct(productToDelete.barcode))
				dispatch(
					setMessageAfterDataFetch(`Товар со штрихкодом ${barcode} удален`)
				)
			}
		} else {
			dispatch(
				setMessageAfterDataFetch(`Товар со штрихкодом ${barcode} не найден`)
			)
			dispatch(setIsError(true))
		}
	}

	return deleteProduct
}

export default useDeleteProduct
