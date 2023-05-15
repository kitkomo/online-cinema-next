import { FC } from 'react'

import Search from './Search/Search'
import cl from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={cl.sidebar}>
			<Search />
		</div>
	)
}

export default Sidebar
