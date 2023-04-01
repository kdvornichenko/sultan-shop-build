import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
	setProductsData,
	setProductsLoading,
} from '@/store/slices/productsSlice'

const useProducts = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		const productsData = localStorage.getItem('productsData')
		if (!productsData) {
			axios
				.get(import.meta.env.VITE_CATALOG_URL)
				.then((response) => {
					localStorage.setItem('productsData', JSON.stringify(response.data))
					dispatch(setProductsData(response.data))
					dispatch(setProductsLoading(false))
				})
				.catch((error) => {
					console.error(error)
					dispatch(setProductsData([]))
				})
		} else {
			dispatch(setProductsData(JSON.parse(productsData)))
			dispatch(setProductsLoading(false))
		}
	}, [])
}

export default useProducts
