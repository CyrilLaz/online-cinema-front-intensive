import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/components/ui/catalog/Catalog'

import { IMovie } from '@/shared/types/movie.types'
import { MovieService } from '@/services/movie.service'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies}
			title="Fresh movies"
			description="Discover the freshest movies in one convenient place at Fresh Movies. From gripping dramas to laugh-out-loud comedies, our handpicked selection ensures an exciting and engaging movie-watching experience for all."
		/>
	)
}

export const getStaticProps:GetStaticProps = async() => {
    try {
        const {data:movies} = await MovieService.getAll();

        return {props:{movies}}
    } catch (error) {
        return {notFound: true}
    }
}
export default FreshPage
