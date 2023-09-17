import dynamic from 'next/dynamic'
import { FC } from 'react'

import { Banner } from '@/components/ui/banner/Banner'
import Gallery from '@/components/ui/gallery/Gallery'
import Subheading from '@/components/ui/heading/Subheading'

import { Content } from '@/ui/banner/content/Content'

import Meta from '@/utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})

export const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta title={movie!.title} description={`Watch ${movie!.title}`}>
			<Banner
				image={movie?.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer
				slug={movie.slug}
				videoSource={movie.videoUrl}
			/>
			
			<div className="mt-12">
				<Subheading title="Similar" />
				<Gallery items={similarMovies} />
			</div>

			{/* rating */}
		</Meta>
	)
}
