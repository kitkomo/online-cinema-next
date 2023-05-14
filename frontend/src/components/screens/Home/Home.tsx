import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'
import Heading from '@/components/UI/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies online and TV shows right from your browser"
		>
			<Heading title='Watch movies online' className='text-gray-300 mb-8 text-xl'/>
		</Meta>
	)
}

export default Home
