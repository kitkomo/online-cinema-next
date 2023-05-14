import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import cl from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
import MaterialIcon from '@/components/UI/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li
			className={cn({
				[cl.active]: asPath === item.link
			})}
		>
			<Link href={item.link}>
				<MaterialIcon name={item.icon}/>
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
