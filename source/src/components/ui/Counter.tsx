import {
	ChangeEvent,
	Dispatch,
	FC,
	KeyboardEvent,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react'

const Counter: FC<{
	countOfProducts: number
	setCountOfProducts: Dispatch<SetStateAction<number>>
	onCountChange: (newCount: number) => void
}> = ({ countOfProducts, setCountOfProducts, onCountChange }) => {
	const [count, setCount] = useState<number>(0)
	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		countOfProducts && countOfProducts > 0 && setCount(countOfProducts)
	}, [countOfProducts])

	const increment = () => {
		setCount((prev) => prev + 1)
		setCountOfProducts((prev) => prev + 1)
	}

	const decrement = () => {
		if (count > 0) {
			setCount((prev) => prev - 1)
			setCountOfProducts((prev) => prev - 1)
		}
		return
	}

	useEffect(() => {
		onCountChange(count)
	}, [count])

	const handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCount(Number(event.target.value))
		setCountOfProducts(Number(event.target.value))
		onCountChange(Number(event.target.value))
	}

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'ArrowDown' && countOfProducts === 0) {
			event.preventDefault()
		}
	}

	const handleInputFocus = () => {
		inputRef.current?.select()
	}

	return (
		<div className="counter">
			<button onClick={decrement}>-</button>
			<input
				type="number"
				value={count}
				onChange={handleCountChange}
				onKeyDown={handleKeyDown}
				onFocus={handleInputFocus}
				ref={inputRef}
			/>
			<button onClick={increment}>+</button>
		</div>
	)
}

export default Counter
