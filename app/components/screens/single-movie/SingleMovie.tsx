import { FC } from 'react'

import { Banner } from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import Subheading from '@/components/ui/heading/Subheading'

import Meta from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'
import { Content } from '@/components/ui/banner/content/Content'

export const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta title={movie!.title} description={`Watch ${movie!.title}`}>
			<Banner image={movie?.bigPoster} Detail={()=><Content movie={movie}/>}/>

			{/* video player */}
			<div className="mt-12">
				<Subheading title="Similar" />
				<Gallery items={similarMovies} />
			</div>

			{/* rating */}
		</Meta>
	)
}
