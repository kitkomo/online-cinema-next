import { FC } from 'react'

import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'
import cl from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={cl.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
