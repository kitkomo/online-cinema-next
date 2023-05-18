import ActorList from '@/components/screens/Admin/actors/ActorList'
import { NextPageAuth } from '@/shared/types/auth.types'

const ActorsAdminPage: NextPageAuth = () => {
	return <ActorList/>
}

ActorsAdminPage.isOnlyAdmin = true

export default ActorsAdminPage
 