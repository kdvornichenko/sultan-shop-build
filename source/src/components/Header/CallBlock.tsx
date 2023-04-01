import { useEffect, useState } from 'react'

import callImg from '@/assets/call-center.png'

import RequestCall from '../ui/Buttons/RequestCall'
import SvgDivider from '../ui/Svg/SvgDivider'

const CallBlock = () => {
	const [isOpen, setIsOpen] = useState(true)

	const openingHours = {
		open: { hours: 9, minutes: 0 },
		close: { hours: 20, minutes: 0 },
	}

	// Сравниваем время работы с текущим временем и меняем цвет индикатора
	useEffect(() => {
		const date = new Date()
		const hours = date.getHours()
		const minutes = date.getMinutes()
		const time = hours + minutes / 60

		const openTime = openingHours.open.hours + openingHours.open.minutes / 60
		const closeTime = openingHours.close.hours + openingHours.close.minutes / 60

		time > closeTime || time < openTime ? setIsOpen(false) : setIsOpen(true)
	}, [])

	return (
		<div className="flex gap-4 items-center xl:gap-6">
			<div className="flex gap-3 items-center">
				<div className="footer-call-block flex flex-col items-end gap-1.25 whitespace-nowrap">
					<a
						className="font-semibold text-sm transition hover:text-orange-700"
						href="tel:+77774900091"
					>
						+7 (777) 490-00-91
					</a>
					<div className="font-light text-xs">
						время работы:{' '}
						{openingHours.open.hours + ':' + openingHours.open.minutes + '0'}-
						{openingHours.close.hours + ':' + openingHours.close.minutes + '0'}
					</div>
					<RequestCall />
				</div>
				<div
					className={
						(isOpen ? 'after:bg-green-500' : 'after:bg-red-500') +
						' ' +
						'footer-hide hidden -mt-6 relative after:absolute after:rounded-full after:top-8 after:right-1.5 after:w-3 after:h-3 after:border-2 after:border-[#F0F6FA] xl:block'
					}
				>
					<img src={callImg} alt="Заказать звонок" />
				</div>
			</div>

			<div className="footer-hide">
				<SvgDivider height={49} />
			</div>
		</div>
	)
}

export default CallBlock
