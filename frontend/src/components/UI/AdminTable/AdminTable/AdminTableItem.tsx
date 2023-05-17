import { FC } from "react"
import { IAdminTableItem } from "./admin-table.interface"
import cl from './AdminTable.module.scss'
import AdminActions from "./AdminActions/AdminActions"

const AdminTableItem: FC<IAdminTableItem> = ({removeHandler, tableItem}) => {
	return (
		<div className={cl.item}>
			{tableItem.items.map(value => <div key={value}>{value}</div>)}
			<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler}/>
		</div>
	)
}

export default AdminTableItem