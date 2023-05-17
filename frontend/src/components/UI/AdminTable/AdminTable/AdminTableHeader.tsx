import { FC } from 'react'
import cl from './AdminTable.module.scss'
import cn from 'classnames';

const AdminTableHeader: FC<{headerItems: string[]}> = ({headerItems}) => {
	return (
		<div className={cn(cl.item, cl.itemHeader)}>
			{headerItems.map(value => <div key={value}>{value}</div>)}
			<div>Actions</div>
		</div>
	)
}

export default AdminTableHeader