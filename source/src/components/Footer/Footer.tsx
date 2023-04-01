import { Link } from 'react-router-dom'

import mastercardIcon from '@/assets/icons/mastercard.svg'
import visaIcon from '@/assets/icons/visa.svg'

import CallBlock from '../Header/CallBlock'
import PriceListButton from '../ui/Buttons/PriceListButton'
import Input from '../ui/Input'
import SvgLogoFooter from '../ui/Svg/SvgLogoFooter'

import FooterMessengers from './FooterMessengers'
import * as footerData from '@/data/footer.data'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="px-4 py-4 mx-auto max-w-8xl flex justify-between gap-3 gap-y-4 flex-wrap sx:py-8 sm:py-12 md:py-16 lg:py-20 xl:pt-[70px] xl:pb-28">
				{/* Logo + Email input */}
				<div className="w-full sm:max-w-xs">
					<div className="flex items-center gap-8">
						<div className="w-1/3 sm:w-auto">
							<Link to="/sultan-shop-build/">
								<SvgLogoFooter color="#fff" />
							</Link>
						</div>
						<div className="[&>button]:w-full flex-1 sm:hidden">
							<PriceListButton />
						</div>
					</div>
					<p className="text-xs mt-4 sm:text-sm md:text-base">
						Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
						в Кокчетаве и Акмолинской области
					</p>
					<div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12">
						<span className="text-xs">Подпишись на скидки и акции</span>
						<Input
							placeholder="Введите ваш E-mail"
							icon="MdArrowForwardIos"
							className="input-search mt-4"
						/>
					</div>
				</div>
				{/* Меню сайта */}
				<div>
					<h4>Меню сайта:</h4>
					<ul>
						{footerData.siteMenu.map((item) => (
							<li key={item.title}>
								<Link to={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
				{/* Категории */}
				<div>
					<h4>Категории:</h4>
					<ul>
						{footerData.categories.map((item) => (
							<li key={item.title}>
								<Link to={item.link}>{item.title}</Link>
							</li>
						))}
					</ul>
				</div>
				{/* Прайс лист и мессенджеры */}
				<div className="hidden sm:block">
					<h4>Скачать прайс-лист:</h4>
					<div className="mt-2.5 sm:mt-3 md:mt-4 lg:mt-6 [&>button]:w-full ">
						<PriceListButton />
					</div>

					<FooterMessengers className="mt-5" />
				</div>
				{/* Котакты */}
				<div className="max-sm:w-full">
					<h4>Контакты:</h4>
					<div className="mt-2.5 sm:mt-3 md:mt-4 lg:mt-6">
						<div className="flex items-start justify-between">
							<CallBlock />
							<FooterMessengers className="ml-4 text-sm sm:hidden " />
						</div>
						<div className="mt-2.5 sm:mt-3 md:mt-4 lg:mt-6 text-sm">
							<Link to="mailto:opt.sultan@mail.ru">
								<div className="font-semibold">opt.sultan@mail.ru</div>
								<span className="font-light">На связи в любое время</span>
							</Link>
						</div>
						<div className="flex items-center gap-1 mt-2.5 sm:mt-3 md:mt-4 lg:mt-6 ">
							<img src={visaIcon} alt="Visa" />
							<img src={mastercardIcon} alt="Mastercard" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
