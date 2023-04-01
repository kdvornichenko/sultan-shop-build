import Button from './Button'

const CatalogButton = () => {
	return (
		<Button
			text="Каталог"
			icon="MdOutlineGridView"
			iconSize="1.5rem"
			className="btn-header"
			link="/catalog"
			variant=""
		/>
	)
}

export default CatalogButton
