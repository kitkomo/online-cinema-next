import { FC } from 'react'

import AdminNavigation from '@/components/UI/AdminNavigation/AdminNavigation'
import AdminHeader from '@/components/UI/AdminTable/AdminHeader/AdminHeader'
import AdminTable from '@/components/UI/AdminTable/AdminTable/AdminTable'
import Heading from '@/components/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useUsers } from './useUsers'
import { convertMongoDate } from '@/utils/date/convertMongoDate'

const UserList: FC = () => {
	const { handleSearch, searchTerm, isLoading, data, deleteAsync } = useUsers()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Email', 'Date register']}
				tableItems={data || []}
			/>
		</Meta>
	)
}

export default UserList
