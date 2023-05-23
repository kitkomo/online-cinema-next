import { FC, ReactNode } from 'react'

import cl from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<{children: ReactNode}> = ({ children }) => {
	return (
		<div className={cl.layout}>
			<Navigation />
			<div className={cl.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
