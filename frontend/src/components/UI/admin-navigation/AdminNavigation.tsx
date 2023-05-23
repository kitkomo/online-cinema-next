import { FC } from 'react'

import AdminNavItem from './AdminNavItem'
import cl from './AdminNavigation.module.scss'
import { navItems } from './admin-navigation.data'

const AdminNavigation: FC = () => {
	return (
		<nav className={cl.nav}>
			<ul>
				{navItems.map((item) => (
					<AdminNavItem navItem={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
