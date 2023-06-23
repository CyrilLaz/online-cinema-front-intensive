import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'

import { MovieService } from '@/services/movie.service'

import MovieList from './MovieList'

const PopularMovies: FC = () => {
	const { data: popularMovies, isLoading } = useQuery(
		'Popular movies in sidebar',
		() => MovieService.getPopularMovies()
	)
	return isLoading ? (
		<div className="mt-11">
			<Skeleton className="mt-4 h-28" count={3} />
		</div>
	) : (
		<MovieList
			link="/trending"
			title="Popular movies"
			movies={popularMovies || []}
		/>
	)
}

export default PopularMovies
