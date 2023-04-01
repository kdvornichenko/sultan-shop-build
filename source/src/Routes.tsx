import { SkeletonTheme } from 'react-loading-skeleton'
import { Navigate, Route, Routes } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import ControlPanel from './pages/ControlPanel'
import ProductPage from './pages/ProductPage'

export const routes = (customProp: string | undefined) => [
	{ path: '/', breadcrumb: 'Главная' },
	{ path: '/catalog', breadcrumb: 'Каталог' },
	{ path: '/control-panel', breadcrumb: 'Панель управления' },
	{ path: '/catalog/:productId', breadcrumb: customProp },
	{ path: '/cart', breadcrumb: 'Корзина' },
]
export default () => (
	<SkeletonTheme baseColor="#EDEDED" highlightColor="#DADADA">
		<ScrollToTop />
		<Routes>
			<Route path="/" element={<Navigate to="/catalog" />} />
			<Route path="/catalog" element={<Catalog />} />
			<Route path="/control-panel" element={<ControlPanel />} />
			<Route path="/catalog/:productId" element={<ProductPage />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/control-panel" element={<ControlPanel />} />
		</Routes>
	</SkeletonTheme>
)
