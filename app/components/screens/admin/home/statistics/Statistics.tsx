import { FC } from 'react'

import style from '../admin.module.scss'

import CountUsers from './CountUsers'
import PopularMovies from './PopularMovies'

const Statistics: FC = () => {
	return (
		<div className={style.statistics}>
			<CountUsers />
			<PopularMovies />
		</div>
	)
}
export default Statistics
