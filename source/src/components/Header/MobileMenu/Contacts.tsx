import { callData, locationData, mailData } from 'data/menuContactBlock.data'

import MenuContactBlock from '@/components/Menu/MenuContactBlock'
import RequestCall from '@/components/ui/Buttons/RequestCall'
import Icon from '@/components/ui/Icons/Icon'

const Contacts = () => {
	return (
		<div className="mb-6">
			<div className="flex flex-col gap-4">
				<MenuContactBlock item={locationData} />
				<MenuContactBlock item={mailData} />
				<MenuContactBlock item={callData} />
			</div>
			<div className="flex gap-2 mt-3">
				<div className="p-3 flex items-center justify-center bg-orange-500 rounded-full text-white [&>svg]:fill-white">
					<Icon name="FiPhone" size="0.8rem" />
				</div>
				<RequestCall />
			</div>
		</div>
	)
}

export default Contacts
