import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton'
import Subheading from '@/components/ui/heading/Subheading'

import { MovieService } from '@/services/movie.service'

import { getMovieUrl } from '@/config/url.config'

import style from '../admin.module.scss'

const PopularMovies: FC = () => {
	const { data: movie, isLoading } = useQuery(
		'most popular movie in admin',
		() => MovieService.getPopularMovies(),
		{ select: (movies) => movies[0] }
	)
	return (
		<div className={classNames(style.block, style.popular)}>
			<Subheading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<p>{`Opened ${movie.countOpened} times`}</p>
						<Link href={getMovieUrl(movie.slug)}>
							<Image
								src={movie.bigPoster}
								alt={movie.title}
								height={176}
								width={285}
								className={style.image}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	)
}
export default PopularMovies
