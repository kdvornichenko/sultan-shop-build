import { IProduct } from 'models'
import { FC } from 'react'

import AddProductForm from '../ProductsControl/AddProductForm'
import Icon from '../ui/Icons/Icon'

const ModalProductSettings: FC<{
	currentProduct: IProduct | undefined
	onCloseClick: () => void
}> = ({ currentProduct, onCloseClick }) => {
	return (
		<div className="fixed top-0 left-0 bottom-0 right-0 m-auto w-full max-w-7xl h-4/5 flex items-center justify-center bg-white rounded-md ring-2 ring-gray-300 shadow-md z-50 overflow-y-auto p-4 max-md:h-full md:p-6 lg:p-8 xl:p-10">
			<div className="w-3/5 h-full max-md:w-full max-lg:w-4/5">
				<AddProductForm product={currentProduct} />
			</div>
			<div
				onClick={onCloseClick}
				className="absolute top-2 right-2 text-slate-700 cursor-pointer lg:top-5 lg:right-5"
			>
				<Icon name="MdClose" size="2rem" />
			</div>
		</div>
	)
}

export default ModalProductSettings
