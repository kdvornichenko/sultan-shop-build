import { FC } from 'react'

const Burger: FC<{ menuIsOpen: boolean; setMenuIsOpen: any }> = ({
	menuIsOpen,
	setMenuIsOpen,
}) => {
	const onClick = () => {
		setMenuIsOpen(!menuIsOpen)
		document.documentElement.classList.toggle('overflow-y-hidden')
	}

	return (
		<button
			onClick={onClick}
			className={
				(menuIsOpen
					? 'before:mt-0 before:rotate-45 after:-rotate-45 after:mb-0 before:[transition:_transform_0.3s_ease-in-out_0.3s,_margin-top_0.3s_ease-in-out_0.1s] after:[transition:_transform_0.3s_ease-in-out_0.3s,_margin-bottom_0.3s_ease-in-out_0.1s]'
					: 'before:-mt-2 after:-mb-2 before:[transition:_transform_0.3s_ease-in-out,_margin-top_0.3s_ease-in-out_0.3s] after:[transition:_transform_0.3s_ease-in-out,_margin-bottom_0.3s_ease-in-out_0.3s]') +
				' ' +
				'flex items-center justify-center bg-orange-500 w-8 h-8 rounded-full cursor-pointer before:absolute before:w-3 before:h-0.5 before:bg-white  after:absolute after:w-3 after:h-0.5 after:bg-white '
			}
		>
			<span
				className={
					(menuIsOpen ? 'w-0' : 'w-3 delay-500') +
					' ' +
					'block relative h-0.5 bg-white transition-all'
				}
			></span>
		</button>
	)
}

export default Burger
