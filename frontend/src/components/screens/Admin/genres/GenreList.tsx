import { FC } from 'react'

import AdminNavigation from '@/components/UI/AdminNavigation/AdminNavigation'
import AdminHeader from '@/components/UI/AdminTable/AdminHeader/AdminHeader'
import AdminTable from '@/components/UI/AdminTable/AdminTable/AdminTable'
import Heading from '@/components/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useGenres } from './useGenres'

const GenreList: FC = () => {
	const { handleSearch, searchTerm, isLoading, data, deleteAsync } = useGenres()

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Slug']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default GenreList
