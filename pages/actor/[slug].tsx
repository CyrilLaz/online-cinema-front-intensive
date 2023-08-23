import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/catalog/Catalog'

import { IGenre, IMovie } from '@/shared/types/movie.types'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import Error404 from '../404'

interface IGenrePage {
	movies: IMovie[]
	actor: IGenre | undefined
}

const ActorPage: NextPage<IGenrePage> = ({ movies, actor }) => {
	return actor ? (
		<Catalog
			movies={movies}
			title={actor.name}
			description={actor.description}
		/>
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: actor } = await ActorService.getBySlug(String(params?.slug))
		const { data: movies } = await MovieService.getByActor(actor._id)

		return { props: { movies, actor } }
	} catch (error) {
		return { notFound: true }
	}
}

export async function getStaticPaths() {
	try {
		const { data: actors } = await ActorService.getAll()
		const paths = actors.map((g) => ({ params: { slug: g.slug } }))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return { paths: [], fallback: false }
	}
}

export default ActorPage
