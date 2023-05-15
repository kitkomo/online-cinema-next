import { FC } from 'react'

import Search from './Search/Search'
import cl from './Sidebar.module.scss'
import MoviesContainer from './MoviesContainer/MoviesContainer'

const Sidebar: FC = () => {
	return (
		<div className={cl.sidebar}>
			<Search />
			<MoviesContainer/>
		</div>
	)
}

export default Sidebar
