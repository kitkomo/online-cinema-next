import { FC } from 'react'

import Menu from './Menu'
import cl from './MenuContainer.module.scss'
import { staticMenu, userMenu } from './menu.data'
import GenreMenu from './genres/GenreMenu';

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={staticMenu} />
			<GenreMenu/>
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
