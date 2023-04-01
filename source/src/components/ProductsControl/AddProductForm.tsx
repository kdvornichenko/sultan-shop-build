import { IFilterItem, IProduct } from 'models'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setNewTypeOfCareOptions } from '@/store/slices/productsSlice'

import Details from '../ui/Details'
import Icon from '../ui/Icons/Icon'

import AfterSubmitMessage from './AfterSubmitMessage'
import FormControlComponent from './FormControlComponent'
import SubmitButton from './SubmitButton'
import { filterData } from '@/data/filter.data'

const AddProductForm: FC<{ product?: IProduct }> = ({ product }) => {
	const dispatch = useDispatch()

	const [isError, setIsError] = useState<boolean>(false)
	const [isLocalImgUrl, setIsLocalImgUrl] = useState<boolean>(true)
	const [isInStock, setIsInStock] = useState<boolean | null>(null)

	const [checkedVolumeType, setCheckedVolumeType] = useState<string>('weight')
	const [volumeText, setVolumeText] = useState<string>('вес')
	const [message, setMessage] = useState<string>('')
	const [typesOfCare, setTypesOfCare] = useState<string[]>([])

	const [editIndex, setEditIndex] = useState<number | null>(null)

	const [typeOfCareOptions, setTypeOfCareOptions] = useState<IFilterItem[]>([])

	const initialFormData: IProduct = {
		title: '',
		img: {
			imgUrl: '',
			isLocal: true,
		},
		label: '',
		volumeType: '',
		volume: '',
		barcode: '',
		vendorCode: '',
		manufacturer: '',
		brand: '',
		description: '',
		price: '',
		isInStock: null,
		typeOfCare: [],
	}

	useEffect(() => {
		if (product) {
			setFormData({ ...product })
			setTypesOfCare(product?.typeOfCare)
		}
	}, [product])

	const [formData, setFormData] = useState<IProduct>(initialFormData)

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target

		if (name === 'imgUrl') {
			setFormData((prevFormData) => ({
				...prevFormData,
				img: {
					...prevFormData.img,
					imgUrl: value,
					isLocal: false,
				},
			}))
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				vendorCode: prevFormData.barcode.slice(0, 6),
				isInStock: isInStock,
				[name]: value,
			}))
		}
	}

	const handleRadioBtnChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.value === 'global') {
			setIsLocalImgUrl(false)
			formData.img.imgUrl = ''
		} else if (event.target.value === 'local') {
			setIsLocalImgUrl(true)
		}

		if (event.target.value === 'inStock') {
			setIsInStock(true)
			setFormData({ ...formData, isInStock: true })
		} else if (event.target.value === 'outOfStock') {
			setIsInStock(false)
			setFormData({ ...formData, isInStock: false })
		}

		if (event.target.name === 'volumeType') {
			setFormData({ ...formData, volumeType: event.target.value })
			setCheckedVolumeType(event.target.value)
			if (event.target.value === 'weight') {
				setVolumeText('вес')
			} else {
				setVolumeText('объем')
			}
		}
	}

	const handleTypeOfCareChange = (event: ChangeEvent<HTMLInputElement>) => {
		const typeId = event.target.value
		const isChecked = event.target.checked

		setTypesOfCare((prevTypesOfCare) => {
			if (isChecked) {
				return [...prevTypesOfCare, typeId]
			} else {
				return prevTypesOfCare.filter((type) => type !== typeId)
			}
		})
	}
	useEffect(() => {
		const savedOptions = localStorage.getItem('typeOfCareOptions')
		if (savedOptions) {
			setTypeOfCareOptions(JSON.parse(savedOptions))
			dispatch(setNewTypeOfCareOptions(typeOfCareOptions))
		} else {
			setTypeOfCareOptions(filterData)
			dispatch(setNewTypeOfCareOptions(typeOfCareOptions))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('typeOfCareOptions', JSON.stringify(typeOfCareOptions))
	}, [typeOfCareOptions])

	const onTypeOfCareEditClick = (index: number) => {
		setEditIndex(index)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const productsData = JSON.parse(
			localStorage.getItem('productsData') || '[]'
		)
		const isProductExists = productsData.some(
			(product: IProduct) => product.barcode === formData.barcode
		)
		if (isProductExists) {
			if (
				window.confirm(
					`Данный товар со штрихкодом ${formData.barcode} уже существует в каталоге, вы уверены, что хотите изменить его данные?`
				)
			) {
				const updatedData = productsData.map((product: IProduct) => {
					if (product.barcode === formData.barcode) {
						return {
							...formData,
							img: {
								imgUrl: formData.img.isLocal
									? `/sultan-shop-build/img/products/${formData.barcode}`
									: formData.img.imgUrl,
								isLocal: formData.img.isLocal,
							},
							typeOfCare: typesOfCare,
						}
					} else {
						return product
					}
				})
				localStorage.setItem('productsData', JSON.stringify(updatedData))
				setMessage(`Данные товара со штрихкодом ${formData.barcode} обновлены`)
			} else {
				setIsError(true)
				setMessage(
					`Редактирование товара со штрихкодом ${formData.barcode} отменено`
				)
				return
			}
		} else {
			localStorage.setItem(
				'productsData',
				JSON.stringify([
					...productsData,
					{
						...formData,
						img: {
							imgUrl: formData.img.isLocal
								? `/sultan-shop-build/img/products/${formData.barcode}`
								: formData.img.imgUrl,
							isLocal: formData.img.isLocal,
						},
						typeOfCare: typesOfCare,
					},
				])
			)
			setMessage(`Товар со штрихкодом ${formData.barcode} добавлен`)
		}
		window.location.reload()
		setFormData(initialFormData)
		setIsError(false)
	}
	const RequireStar = () => {
		return <span className="text-red-500">*</span>
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2 className="mb-5 font-semibold text-3xl text-center">
					{product ? 'Редактировать' : 'Добавить'} товар
				</h2>
				{/* Название товара: */}
				<div>
					<FormControlComponent
						isRequired={true}
						name="title"
						text="Название товара:"
						inputType="text"
						title={formData.title}
						onChange={handleChange}
					/>
				</div>
				{/* Url изображения: */}
				<div>
					<label>
						<RequireStar />
						Url изображения:
					</label>
					<div className="flex flex-col">
						<label htmlFor="local">
							<input
								type="radio"
								id="local"
								name="imgUrlType"
								value="local"
								checked={isLocalImgUrl === true}
								onChange={handleRadioBtnChange}
								required
							/>
							Внутренний
						</label>
						<label htmlFor="global">
							<input
								type="radio"
								id="global"
								name="imgUrlType"
								value="global"
								checked={isLocalImgUrl === false}
								onChange={handleRadioBtnChange}
								required
							/>
							Внешний
						</label>
					</div>
				</div>
				{/* Поле ввода URL изображения */}
				{!isLocalImgUrl && (
					<div>
						<FormControlComponent
							isRequired={true}
							name="imgUrl"
							text="Введите URL изображения:"
							inputType="text"
							title={formData.img.imgUrl}
							onChange={handleChange}
						/>
					</div>
				)}
				{/* Лэйбл: */}
				<div>
					<FormControlComponent
						isRequired={false}
						name="label"
						text="Лэйбл:"
						inputType="text"
						title={formData.label}
						onChange={handleChange}
					/>
				</div>
				{/* Тип размера: */}
				<div>
					<label>
						<RequireStar />
						Тип размера:
					</label>
					<div className="flex flex-col">
						<label htmlFor="weight">
							<input
								type="radio"
								id="weight"
								name="volumeType"
								value="weight"
								checked={checkedVolumeType === 'weight'}
								onChange={handleRadioBtnChange}
								required
							/>
							Вес
						</label>
						<label htmlFor="volume">
							<input
								type="radio"
								id="volume"
								name="volumeType"
								value="volume"
								checked={checkedVolumeType === 'volume'}
								onChange={handleRadioBtnChange}
								required
							/>
							Объем
						</label>
					</div>
				</div>
				{/* Поле ввода объема */}
				<div>
					<FormControlComponent
						isRequired={true}
						name="volume"
						text={`Введите ${volumeText}:`}
						inputType="text"
						title={formData.volume}
						onChange={handleChange}
					/>
				</div>
				{/* Штрихкод: */}
				<div>
					<FormControlComponent
						isRequired={true}
						name="barcode"
						text="Штрихкод:"
						inputType="number"
						title={formData.barcode}
						onChange={handleChange}
					/>
				</div>
				{/* Производитель: */}
				<div>
					<FormControlComponent
						isRequired={true}
						name="manufacturer"
						text="Производитель:"
						inputType="text"
						title={formData.manufacturer}
						onChange={handleChange}
					/>
				</div>
				{/* Бренд: */}
				<div>
					<FormControlComponent
						isRequired={true}
						name="brand"
						text="Бренд:"
						inputType="text"
						title={formData.brand}
						onChange={handleChange}
					/>
				</div>
				{/* Описание: */}
				<div>
					<FormControlComponent
						isRequired={true}
						name="description"
						text="Описание:"
						inputType="text"
						title={formData.description}
						onChange={handleChange}
						className="h-36"
					/>
				</div>
				{/* Цена: */}
				<div>
					<FormControlComponent
						isRequired={true}
						name="price"
						text="Цена:"
						inputType="number"
						title={formData.price}
						onChange={handleChange}
					/>
				</div>
				{/* Наличие товара: */}
				<div>
					<label>
						<RequireStar />
						Наличие товара:
					</label>
					<div className="flex flex-col">
						<label htmlFor="inStock">
							<input
								type="radio"
								id="inStock"
								name="isInStock"
								value="inStock"
								checked={isInStock === true}
								onChange={handleRadioBtnChange}
								required
							/>
							В наличии
						</label>
						<label htmlFor="outOfStock">
							<input
								type="radio"
								id="outOfStock"
								name="isInStock"
								value="outOfStock"
								checked={isInStock === false}
								onChange={handleRadioBtnChange}
								required
							/>
							Отсутствует
						</label>
					</div>
				</div>
				<div className="items-start max-md:flex-col gap-2">
					{/* Назначение товара: */}
					<label className="max-md:max-w-none">
						<RequireStar />
						Назначение товара:
					</label>
					<Details title="Раскрыть список">
						<div className="flex flex-col items-start gap-1">
							{typeOfCareOptions.map((option, index) => (
								<div key={option.type}>
									<label htmlFor={option.type} />
									<div className="summary-elem">
										{editIndex === index ? (
											<>
												<input
													type="text"
													value={option.title}
													onChange={(event) =>
														setTypeOfCareOptions((prev) =>
															prev.map((prevOption, prevIndex) =>
																prevIndex === index
																	? {
																			...prevOption,
																			title: event.target.value,
																	  }
																	: prevOption
															)
														)
													}
												/>
												<button
													className="w-5 h-5 flex items-center justify-center text-white bg-slate-700 rounded-full "
													onClick={() => setEditIndex(null)}
												>
													<Icon name="MdDone" size="1rem" />
												</button>
											</>
										) : (
											<>
												<input
													type="checkbox"
													id={option.type}
													name={option.title}
													value={option.type}
													checked={typesOfCare.includes(option.type)}
													onChange={handleTypeOfCareChange}
												/>
												<span>{option.title}</span>
												<div
													className="cursor-pointer"
													onClick={() => onTypeOfCareEditClick(index)}
												>
													<Icon name="FiEdit" />
												</div>
											</>
										)}
									</div>
								</div>
							))}
						</div>
					</Details>
				</div>
				{/* Сообщение об успехе/ошибке */}
				<AfterSubmitMessage isError={isError} message={message} />
				{/* Кнопка отправки */}
				<SubmitButton text={product ? 'Сохранить' : 'Добавить'} />
			</form>
		</>
	)
}

export default AddProductForm
