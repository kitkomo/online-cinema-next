import { FC } from 'react'

import MoviesContainer from './MoviesContainer/MoviesContainer'
import Search from './Search/Search'
import cl from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={cl.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
