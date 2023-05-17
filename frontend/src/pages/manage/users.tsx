import UserList from '@/components/screens/Admin/users/UserList'
import { NextPageAuth } from '@/shared/types/auth.types'

const UsersAdminPage: NextPageAuth = () => {
	return <UserList/>
}

UsersAdminPage.isOnlyAdmin = true

export default UsersAdminPage
 