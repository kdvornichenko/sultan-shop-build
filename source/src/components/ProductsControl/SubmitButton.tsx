import { FC } from 'react'
import { BarLoader } from 'react-spinners'

const SubmitButton: FC<{ isLoading?: boolean; text: string }> = ({
	isLoading,
	text,
}) => {
	return (
		<button className="btn-header mx-auto max-md:w-full" type="submit">
			{isLoading ? (
				<BarLoader
					className="block mx-0 my-auto"
					color={'#fff'}
					loading={isLoading}
				/>
			) : (
				text
			)}
		</button>
	)
}

export default SubmitButton
