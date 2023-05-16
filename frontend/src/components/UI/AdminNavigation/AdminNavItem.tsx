import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import cl from './AdminNavigation.module.scss'
import { INavItem } from './admin-nav.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({ item: { link, title } }) => {
	const { asPath } = useRouter()
	return (
		<li>
			<Link
				href={link}
				className={cn({
					[cl.active]: asPath === `/${link}`
				})}
			>
				{title}
			</Link>
		</li>
	)
}

export default AdminNavItem
