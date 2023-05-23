import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { AdminService } from '@/services/admin/admin.service'

import cl from '../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)

	return (
		<div className={cn(cl.block, cl.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<div className={cl.number}>{response?.data}</div>
				)}
				<div className={cl.description}>users</div>
			</div>
		</div>
	)
}

export default CountUsers
