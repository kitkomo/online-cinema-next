import { FC } from 'react'

import AdminNavItem from './AdminNavItem'
import cl from './AdminNavigation.module.scss'
import { navItems } from './admin-nav.data'

const AdminNavigation: FC = () => {
	return (
		<nav className={cl.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem key={item.link} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
