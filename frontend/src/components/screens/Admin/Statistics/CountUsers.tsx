import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/UI/SkeletonLoader'

import { AdminService } from '@/services/admin.service'

import cl from './../Admin.module.scss'

const CountUsers: FC = () => {
	const { isLoading, data } = useQuery('count-users', () =>
		AdminService.getCountUsers()
	)

	return (
		<div className={cn(cl.block, cl.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<div className={cl.number}>
						{data?.data}
						<div className={cl.description}>users</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default CountUsers
