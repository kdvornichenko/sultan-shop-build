import { FC, useEffect, useRef, useState } from 'react'

const SvgDivider: FC<{
	height: number
	width?: number | string
	opacity?: number | undefined
}> = ({ height, width, opacity }) => {
	const [customWidth, setCustomWidth] = useState<number | undefined>(0)

	const ref = useRef<SVGSVGElement>(null)

	useEffect(() => {
		if (width == '100%') {
			setCustomWidth(ref.current?.clientWidth)

			window.addEventListener('resize', () => {
				setCustomWidth(ref.current?.clientWidth)
			})
		}
	})

	return (
		<svg
			ref={ref}
			width={width ? width : '2'}
			height={height}
			viewBox={'0 0' + ' ' + (width ? customWidth : '2') + ' ' + height}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				opacity={opacity ? opacity : '0.1'}
				d={width ? 'M0 1H' + customWidth : 'M1 0V ' + height}
				stroke="black"
				strokeDasharray="2 2"
			/>
		</svg>
	)
}

export default SvgDivider
