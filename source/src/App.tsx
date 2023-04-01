import Favicon from 'react-favicon'
import { HashRouter } from 'react-router-dom'

import Routes from './Routes'
import Admin from './components/Admin'
import Footer from './components/Footer/Footer'
import GoBack from './components/GoBack'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Breadcrumbs from './components/ui/Breadcrumbs'
import useProducts from './hooks/useProducts'
import useWindowSize from './hooks/useWindowSize'

function App() {
	const windowSize = useWindowSize()
	useProducts()

	return (
		<HashRouter basename="/">
			<Favicon url="./icons/favicon.ico" />
			<div className="max-w-8xl mx-auto text-primary">
				{windowSize.isDesktop && <Menu />}
				<Header />
				<div className="mt-16 px-4">
					<div className="flex items-center justify-between">
						<div className="max-md:hidden">
							<Breadcrumbs />
						</div>
						<div className="hidden max-md:block">
							<GoBack />
						</div>
						<Admin />
					</div>
					<Routes />
				</div>
				<Footer />
			</div>
		</HashRouter>
	)
}

export default App
