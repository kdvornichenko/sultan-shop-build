import { FC } from 'react'

const AfterSubmitMessage: FC<{ isError: boolean; message: string }> = ({
	isError,
	message,
}) => {
	return (
		<div
			className={
				(isError ? 'text-red-500' : 'text-green-500') + ' ' + 'self-end'
			}
		>
			{message}
		</div>
	)
}

export default AfterSubmitMessage
