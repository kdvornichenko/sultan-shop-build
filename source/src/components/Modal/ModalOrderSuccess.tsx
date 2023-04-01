import { Dispatch, FC, SetStateAction } from 'react'

import Icon from '../ui/Icons/Icon'

const ModalOrderSuccess: FC<{
	setIsModalVisible: Dispatch<SetStateAction<boolean>>
}> = ({ setIsModalVisible }) => {
	return (
		<div className="fixed top-0 left-0 bottom-0 right-0 m-auto w-screen h-screen z-50 bg-primary/40">
			<div className="rounded-shadow-center relative h-1/2 w-4/5 mx-auto mt-[25vh] flex-col gap-2 bg-white text-center md:gap-4 md:w-2/3 xl:gap-6 2xl:w-1/3">
				<div
					onClick={() => setIsModalVisible(false)}
					className="absolute top-8 right-8 cursor-pointer text-orange-500 hover:text-orange-700 transition"
				>
					<Icon name="MdClose" size="1.5rem" />
				</div>
				<div className="w-15 h-15 flex items-center justify-center rounded-full bg-orange-500 text-white">
					<Icon name="MdDoneAll" size="1.5rem" />
				</div>
				<div className="font-medium uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[40px]">
					Спасибо за заказ
				</div>
				<div className="font-light text-slate-700 text-xs md:text-sm lg:text-lg xl:text-xl">
					Наш менеджер свяжется с вами в ближайшее время
				</div>
			</div>
		</div>
	)
}

export default ModalOrderSuccess
