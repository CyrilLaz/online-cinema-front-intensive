import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { IHome } from '@/screens/home/Home.interface'

import { MovieService } from '@/services/movie.service'

import { getGenreList } from '@/utils/movie/getGenreListEach'

import { getMovieUrl } from '@/config/url.config'

const HomePage: NextPage<IHome> = ({ slides }) => {
	return <Home slides={slides} />
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
		return { props: { slides } }
	} catch (error) {
		return { props: { slides: [] } }
	}
}

export default HomePage
