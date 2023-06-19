import { FC } from 'react'

import SkeletonLoader from '@/components/ui/Skeleton'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<SkeletonLoader count={5} className='h-7 mt-6'/>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu
