import { FC } from 'react'

import Gallery from '@/components/ui/gallery/Gallery'
import Heading from '@/components/ui/heading/Heading'
import Subheading from '@/components/ui/heading/Subheading'
import Slider from '@/components/ui/slider/Slider'

import Meta from '@/utils/meta/Meta'

import { IHome } from './Home.interface'

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movie online"
			description="A cinema is a place where people go to watch films for entertainment. The country has relatively few cinemas."
		>
			<Heading
				title="Watch movie online"
				className="text-gray-300 text-xl mb-8"
			/>
			<Slider slides={slides} />
			<div className="my-10">
				<Subheading title="Trending now" />
				{trendingMovies && <Gallery items={trendingMovies} />}
			</div>
			<div>
				<Subheading title="Best actors" />
				{actors && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}

export default Home
