import { IProductImg } from 'models'
import { FC, useEffect, useRef, useState } from 'react'

const ProductPicture: FC<{ productImg: IProductImg | undefined }> = ({
	productImg,
}) => {
	const [isLocal, setIsLocal] = useState<boolean | undefined>(true)
	const [imgUrl, setImgUrl] = useState<string | undefined>('')
	const imgRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		setIsLocal(productImg?.isLocal)
		setImgUrl(productImg?.imgUrl)
	}, [productImg])

	const handleImgLoad = () => {
		if (imgRef.current) {
			imgRef.current.clientHeight > imgRef.current.clientWidth &&
				(imgRef.current.style.height = '100%')
		}
	}

	return (
		<picture>
			<source srcSet={isLocal ? imgUrl + '.webp' : imgUrl} type="image/webp" />
			<img
				ref={imgRef}
				src={isLocal ? imgUrl + '.png' : imgUrl}
				alt={productImg?.imgUrl}
				className="mx-auto rounded-lg"
				onLoad={handleImgLoad}
			/>
		</picture>
	)
}

export default ProductPicture
