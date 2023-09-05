import { GetStaticProps, NextPage } from 'next'

import { SingleMovie } from '@/components/screens/single-movie/SingleMovie'
import Catalog from '@/components/ui/catalog/Catalog'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'

import { IMovie } from '@/shared/types/movie.types'

import { MovieService } from '@/services/movie.service'

import { getMovieUrl } from '@/config/url.config'

import Error404 from '../404'

export interface IMoviePage {
	similarMovies: IGalleryItem[]
	movie: IMovie
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
	return movie ? (
		<SingleMovie similarMovies={similarMovies} movie={movie} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))
		const { data: dataSimilarMovies } = await MovieService.getByGenres(
			movie.genres.map((g) => g._id)
		)

		const similarMovies: IGalleryItem[] = dataSimilarMovies
			.filter((m) => m._id !== movie._id)
			.map(({ poster, title, slug }) => ({
				name: title,
				link: getMovieUrl(slug),
				posterPath: poster,
				// content: { title: name, subtitle: `+${countMovies} movies` },
			}))
		return { props: { similarMovies, movie } }
	} catch (error) {
		return { notFound: true }
	}
}

export async function getStaticPaths() {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map((g) => ({ params: { slug: g.slug } }))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return { paths: [], fallback: false }
	}
}

export default MoviePage
