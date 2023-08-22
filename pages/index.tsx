import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { IHome } from '@/screens/home/Home.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenreList } from '@/utils/movie/getGenreListEach'

import { getActorUrl, getMovieUrl } from '@/config/url.config'

const HomePage: NextPage<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}
export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		const slides: ISlide[] = movies
			.slice(0, 3)
			.map(({ _id, bigPoster, slug, title, genres }) => ({
				_id,
				bigPoster,
				title,
				link: getMovieUrl(slug),
				subtitle: getGenreList(genres),
			}))

		const { data: dataActors } = await ActorService.getAll()
		const actors: IGalleryItem[] = dataActors
			.slice(0, 7)
			.map(({ name, countMovies, slug, photo }) => ({
				name,
				link: getActorUrl(slug),
				posterPath: photo,
				content: { title: name, subtitle: `+${countMovies} movies` },
			}))

		const dataTrendingMovies = await MovieService.getPopularMovies()
		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map(({ title, poster, slug }) => ({
				name: title,
				link: getMovieUrl(slug),
				posterPath: poster,
			}))
		return { props: { slides, actors, trendingMovies } as IHome }
	} catch (error) {
		return { props: { slides: [], actors: [], trendingMovies: [] } as IHome }
	}
}

export default HomePage
