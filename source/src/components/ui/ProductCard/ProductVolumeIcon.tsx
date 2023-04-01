import { FC } from 'react'

import Icon from '../Icons/Icon'

const ProductVolumeIcon: FC<{ volumeType: string | undefined }> = ({
	volumeType,
}) => {
	return (
		<div className="opacity-50">
			{volumeType === 'volume' ? (
				<Icon name="MdBatteryFull" size="1rem" />
			) : (
				<Icon name="FiBox" size="1rem" />
			)}
		</div>
	)
}

export default ProductVolumeIcon
