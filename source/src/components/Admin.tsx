import { Link } from 'react-router-dom'

import Icon from './ui/Icons/Icon'

const Admin = () => {
	return (
		<Link to="/control-panel">
			<div className="p-3 bg-slate-700 rounded-full shadow-lg text-white cursor-pointer z-50">
				<Icon name="MdPerson" size="1rem" />
			</div>
		</Link>
	)
}

export default Admin
