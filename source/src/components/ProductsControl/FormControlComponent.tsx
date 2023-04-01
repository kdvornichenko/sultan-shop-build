import { ChangeEvent, FC } from 'react'

interface IFormControlComponent {
	isRequired: boolean
	name: string
	text: string
	inputType: string
	title: string | undefined
	onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	className?: string
}

const RequireStar = () => {
	return <span className="text-red-500">*</span>
}

const FormControlComponent: FC<IFormControlComponent> = ({
	name,
	isRequired,
	text,
	inputType,
	title,
	onChange,
	className,
}) => {
	const InputComponent = name === 'description' ? 'textarea' : 'input'

	return (
		<>
			<label htmlFor={name}>
				{isRequired && <RequireStar />}
				{text}
			</label>
			<InputComponent
				type={inputType}
				id={name}
				name={name}
				value={title}
				onChange={onChange}
				required={isRequired}
				className={className}
			/>
		</>
	)
}

export default FormControlComponent
