import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/catalog/Catalog'

import { IMovie } from '@/shared/types/movie.types'
import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies}
			title="Trending movies"
			description="Experience the pulse of the film industry with Trending Movies. Stay up to date with the latest buzz-worthy films, from critically acclaimed masterpieces to crowd-pleasing blockbusters. Let us guide you to the hottest movie tickets in town, ensuring you never miss out on the films that everyone is talking about."
		/>
	)
}

export const getStaticProps:GetStaticProps = async() => {
    try {
        const movies = await MovieService.getPopularMovies();

        return {props:{movies}}
    } catch (error) {
        return {notFound: true}
    }
}
export default TrendingPage
