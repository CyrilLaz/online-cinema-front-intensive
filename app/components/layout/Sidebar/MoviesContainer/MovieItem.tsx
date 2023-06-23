import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getGenreListEach } from '@/utils/movie/getGenreListEach'

import { getGenreUrl, getMovieUrl } from '@/config/url.config'

import styles from './MovieList.module.scss'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<li className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					alt={movie.title}
					src={movie.poster}
					width={65}
					height={97}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<h3 className={styles.title}>{movie.title}</h3>
				<ul className={styles.genres}>
					{movie.genres.map((genre, idx) => (
						<li key={genre._id}>
							<Link href={getGenreUrl(genre.slug)}>
								{getGenreListEach(idx, movie.genres.length, genre.name)}
							</Link>
						</li>
					))}
				</ul>
                <div className={styles.rating}>
                    <MaterialIcon name='MdStarRate'/>
                    <span>{movie.rating.toFixed(1)}</span>
                </div>
			</div>
		</li>
	)
}

export default MovieItem
