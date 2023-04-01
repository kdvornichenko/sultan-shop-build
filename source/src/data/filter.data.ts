import { IFilterItem } from 'models'

export const filterData: IFilterItem[] = [
	{ title: 'Уход\n за телом', type: 'body', isSelected: false },
	{ title: 'Уход\n за руками', type: 'hands', isSelected: false },
	{ title: 'Уход\n за ногами', type: 'feet', isSelected: false },
	{ title: 'Уход\n за лицом', type: 'face', isSelected: false },
	{ title: 'Уход\n за волосами', type: 'hairs', isSelected: false },
	{ title: 'Средства\n для загара', type: 'tan', isSelected: false },
	{ title: 'Средства\n для бритья', type: 'shave', isSelected: false },
	{ title: 'Подарочные\n наборы', type: 'gift', isSelected: false },
	{ title: 'Гигиеническая\n продукция', type: 'hygiene', isSelected: false },
	{ title: 'Гигиена\n полости рта', type: 'mouth', isSelected: false },
	{ title: 'Бумажная\n продукция', type: 'paper', isSelected: false },
]
