import { FC } from 'react'

import ProductVolumeIcon from './ProductVolumeIcon'

const ProductVolume: FC<{
	volumeType: string | undefined
	volume: string | undefined
}> = ({ volumeType, volume }) => {
	return (
		<>
			<ProductVolumeIcon volumeType={volumeType} />
			<span className="text-xs text-slate-700">{volume}</span>
		</>
	)
}

export default ProductVolume
