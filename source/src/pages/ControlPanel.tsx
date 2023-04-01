import AddProductForm from '@/components/ProductsControl/AddProductForm'
import ControlProdcts from '@/components/ProductsControl/ControlProdcts'

const ControlPanel = () => {
	return (
		<div className="mt-6 p-4 flex justify-between gap-10 shadow-lg rounded-lg max-md:flex-col">
			<div className="max-md:w-full w-1/2">
				<AddProductForm />
			</div>
			<div className="max-md:w-full w-1/2">
				<ControlProdcts />
			</div>
		</div>
	)
}

export default ControlPanel
