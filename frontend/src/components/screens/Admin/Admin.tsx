import Meta from '@/utils/meta/Meta'
import React from 'react'
import Statistics from './Statistics/Statistics'
import Heading from '@/components/UI/heading/Heading'
import AdminNavigation from '@/components/UI/AdminNavigation/AdminNavigation'

const Admin = () => {
	return (
	<Meta title='Admin panel'>
		<AdminNavigation/>
		<Heading title='Statistics'/>
		<Statistics/>
	</Meta>
	)
}

export default Admin