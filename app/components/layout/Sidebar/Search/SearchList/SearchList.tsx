import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import { getMovieUrl } from '@/config/url.config'

import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	console.log(movies);
	return (
		<div className={styles.list}>
			{movies?.length ? (
				movies.map((movie) => (
					<Link key={movie._id} href={getMovieUrl(movie.slug)}>
						<Image
							src={movie.poster}
							alt={movie.title}
							className="object-cover object-top"
							width={50}
							height={50}
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<span className="text-white text-center my-4">Not found anything!</span>
			)}
		</div>
	)
}

export default SearchList
