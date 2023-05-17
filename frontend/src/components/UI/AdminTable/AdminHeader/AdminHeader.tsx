import { ChangeEvent, FC } from 'react'

import SearchField from '../../SearchField/SearchField'

import AdminCreateButton from './AdminCreateButton'
import cl from './AdminHeader.module.scss'

interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	handleSearch,
	searchTerm
}) => {
	return (
		<div className={cl.header}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
