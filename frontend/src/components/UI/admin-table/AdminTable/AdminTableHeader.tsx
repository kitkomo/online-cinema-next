import cn from 'classnames'
import { FC } from 'react'

import cl from './AdminTable.module.scss'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(cl.item, cl.itemHeader)}>
			{headerItems.map((value) => (
				<div key={value}>{value}</div>
			))}

			<div>Actions</div>
		</div>
	)
}

export default AdminTableHeader
