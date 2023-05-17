import React from 'react'

import AdminNavigation from '@/components/UI/AdminNavigation/AdminNavigation'
import Heading from '@/components/UI/heading/Heading'

import Meta from '@/utils/meta/Meta'

import Statistics from './Statistics/Statistics'

const Admin = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Statistics" />
			<Statistics />
		</Meta>
	)
}

export default Admin
