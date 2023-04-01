import Icon from '../ui/Icons/Icon'

const PriceList = () => {
	return (
		<div className="rounded-shadow-center px-9 flex items-center gap-2.5 font-bold text-sm cursor-pointer hover:bg-gray-300">
			<span>Прайс-лист</span>
			<Icon name="MdDownload" size="2rem" />
		</div>
	)
}

export default PriceList
