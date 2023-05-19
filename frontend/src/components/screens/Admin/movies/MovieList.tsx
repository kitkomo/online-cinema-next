import { FC } from 'react'

import AdminNavigation from '@/components/UI/AdminNavigation/AdminNavigation'
import AdminHeader from '@/components/UI/AdminTable/AdminHeader/AdminHeader'
import AdminTable from '@/components/UI/AdminTable/AdminTable/AdminTable'
import Heading from '@/components/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const { handleSearch, searchTerm, isLoading, data, deleteAsync, createAsync } = useMovies()

	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Movie', 'Genre', 'Rating']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default MovieList
