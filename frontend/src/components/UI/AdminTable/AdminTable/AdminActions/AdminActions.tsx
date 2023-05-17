import {FC} from 'react'
import cl from './AdminActions.module.scss'
import { useRouter } from 'next/router'
import MaterialIcon from '@/components/UI/MaterialIcon'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({editUrl, removeHandler}) => {

	const {push} = useRouter()

	return (
		<div className={cl.action}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name='MdEdit'/>
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name='MdClose'/>
			</button>
		</div>
	)
}

export default AdminActions