import { FC } from 'react'

import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'
import { IMovieList } from './movie-list.interface'
import Link from 'next/link'

const MovieList: FC<IMovieList> = ({ link, movies, title }) => {
	return (
		<div className={styles.list}>
			<h2 className={styles.heading}>{title}</h2>
			<ul className={styles.itemList}>
				{movies.map((movie) => (
					<MovieItem key={movie._id} movie={movie} />
				))}
			</ul>
			<Link href={link} className={styles.button}>See more</Link>
		</div>
	)
}

export default MovieList
