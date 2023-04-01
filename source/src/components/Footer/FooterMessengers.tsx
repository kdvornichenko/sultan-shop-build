import { FC } from 'react'
import { Link } from 'react-router-dom'

import Icon from '../ui/Icons/Icon'

const FooterMessengers: FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={className}>
			<span>
				Связь <br className="md:hidden" /> в мессенджерах:
			</span>

			<div className="mt-4 flex items-center gap-2.5">
				<Link
					to="#"
					className="w-10 h-10  flex items-center justify-center bg-green-500 rounded-full hover:bg-green-600 transition"
				>
					<Icon name="FaWhatsapp" size="1.5rem" />
				</Link>
				<Link
					to="#"
					className="w-10 h-10 pr-0.5 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-500 transition"
				>
					<Icon name="FaTelegramPlane" size="1.5rem" />
				</Link>
			</div>
		</div>
	)
}

export default FooterMessengers
