import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies online and TV shows right from your browser"
		>
			<h1>Home</h1>
		</Meta>
	)
}

export default Home
