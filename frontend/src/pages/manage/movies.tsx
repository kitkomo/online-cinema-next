import MovieList from '@/components/screens/Admin/movies/MovieList'
import { NextPageAuth } from '@/shared/types/auth.types'

const MoviesAdminPage: NextPageAuth = () => {
	return <MovieList/>
}

MoviesAdminPage.isOnlyAdmin = true

export default MoviesAdminPage
 