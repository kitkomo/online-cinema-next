import dynamic from 'next/dynamic'
import { FC } from 'react'

import cl from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.types'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={cl.menu}>
			<div className={cl.heading}>{title}</div>
			<ul className={cl.ul}>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
