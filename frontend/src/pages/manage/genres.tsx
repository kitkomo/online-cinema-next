import GenreList from '@/components/screens/Admin/genres/GenreList'
import { NextPageAuth } from '@/shared/types/auth.types'

const GenresAdminPage: NextPageAuth = () => {
	return <GenreList/>
}

GenresAdminPage.isOnlyAdmin = true

export default GenresAdminPage
 