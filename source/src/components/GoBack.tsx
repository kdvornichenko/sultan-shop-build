import { useNavigate } from 'react-router-dom'

import Icon from './ui/Icons/Icon'

const GoBack = () => {
	const navigate = useNavigate()

	const hadnleNavigateClick = () => {
		navigate(-1)
	}

	return (
		<button
			onClick={hadnleNavigateClick}
			className="flex items-center gap-3 text-slate-700"
		>
			<div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-200">
				<Icon name="MdArrowBackIosNew" size="1rem" />
			</div>
			<span className="font-semibold uppercase tracking-widest text-sx">
				Назад
			</span>
		</button>
	)
}

export default GoBack
