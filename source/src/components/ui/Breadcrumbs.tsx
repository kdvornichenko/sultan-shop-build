import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import { selectCurrentProductTitle } from '@/store/reducers/productsReducer'

import { routes } from '../../Routes'

import SvgDivider from './Svg/SvgDivider'

const Breadcrumbs = () => {
	const currentProductTitle = useSelector(selectCurrentProductTitle)

	const breadcrumbs = useBreadcrumbs(routes(currentProductTitle))

	return (
		<div className="breadcrumbs">
			{breadcrumbs.map(({ match, breadcrumb }) => (
				<span key={match.pathname} className="flex items-center">
					<NavLink className="mx-2 line-clamp-1 max-w-md" to={match.pathname}>
						{breadcrumb}
					</NavLink>
					<SvgDivider height={16} opacity={0.4} />
				</span>
			))}
		</div>
	)
}

export default Breadcrumbs
