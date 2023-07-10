import classNames from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'

import SkeletonLoader from '@/components/ui/Skeleton'

import { AdminService } from '@/services/admin.service'

import style from '../admin.module.scss'

const CountUsers: FC = () => {
	const { data, isLoading } = useQuery(
		'Count Users',
		() => AdminService.getCountUsers(),
		{ select: ({ data }) => data }
	)
	return (
		<div className={classNames(style.block, style.count)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<>
						<div className={style.number}>{data}</div>
						<span className={style.description}>users</span>
					</>
				)}
			</div>
		</div>
	)
}
export default CountUsers
