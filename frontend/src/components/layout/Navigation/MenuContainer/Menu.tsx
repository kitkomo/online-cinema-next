import { FC } from 'react'
import { IMenu } from './menu.interface'
import cl from './Menu.module.scss'
import MenuItem from './MenuItem'
import AuthItems from './auth/AuthItems'

const Menu: FC<{menu: IMenu}> = ({menu: {items, title}}) => {
	return (
		<div className={cl.menu}>
			<span className={cl.heading}>{title}</span>
			<ul className={cl.list}>
				{
					items.map(item => (
						<MenuItem item={item} key={item.link}/>
					))
				}
				{title === 'General' ? <AuthItems/> : ''}
			</ul>
			</div>
	)
}

export default Menu