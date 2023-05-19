import { FC } from 'react'

import AdminNavigation from '@/components/UI/AdminNavigation/AdminNavigation'
import AdminHeader from '@/components/UI/AdminTable/AdminHeader/AdminHeader'
import AdminTable from '@/components/UI/AdminTable/AdminTable/AdminTable'
import Heading from '@/components/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useActors } from './useActors'

const ActorList: FC = () => {
	const { handleSearch, searchTerm, isLoading, data, deleteAsync, createAsync } = useActors()

	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync}/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Count Movies']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default ActorList
