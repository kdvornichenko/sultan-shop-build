import { FC } from 'react'

const Overlay: FC<{ menuIsOpen: boolean }> = ({ menuIsOpen }) => {
	const closed =
		'-mt-[1000px] opacity-0 [transition:_margin-top_0s_ease-in-out_0.5s,_opacity_0.5s_ease-in-out_0s]'
	const opened =
		'mt-0 opacity-50 [transition:_margin-top_0s_ease-in-out_0s,_opacity_0.5s_ease-in-out_0s]'

	return (
		<div
			className={
				(menuIsOpen ? opened : closed) +
				' ' +
				'relative -z-10 h-screen w-screen bg-primary'
			}
		/>
	)
}

export default Overlay
