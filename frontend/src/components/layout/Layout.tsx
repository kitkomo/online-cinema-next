import { FC } from 'react'

import cl from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className={cl.layout}>
			<Navigation />
			<div className={cl.main}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
