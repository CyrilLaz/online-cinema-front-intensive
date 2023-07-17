import MoviesList from '@/screens/admin/movies/MoviesList'
import { NextPageAuth } from '@/shared/types/auth.types'

const MoviesListPage: NextPageAuth = () => {
	return <MoviesList/>
}
MoviesListPage.isOnlyAdmin = true
export default MoviesListPage
