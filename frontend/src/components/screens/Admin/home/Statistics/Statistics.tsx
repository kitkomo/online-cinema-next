import { FC } from 'react'

import cl from '../Admin.module.scss'

import CountUsers from './CountUsers'
import PopularMovie from './PopularMovie'

const Statistics: FC = () => {
	return (
		<div className={cl.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics
