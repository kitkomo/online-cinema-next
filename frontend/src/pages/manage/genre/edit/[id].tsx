import GenreEdit from '@/components/screens/Admin/genresEdit/GenreEdit'
import { NextPageAuth } from '@/shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
	return <GenreEdit/>
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
 