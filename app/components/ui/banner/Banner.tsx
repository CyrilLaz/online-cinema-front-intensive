import Image from 'next/image'
import { FC } from 'react'

import styles from './Banner.module.scss'

interface IBanner {
	image: string
	Detail?: FC | null
}
export const Banner: FC<IBanner> = ({ Detail, image }) => {
	return (
		<div className={styles.banner}>
			<Image
				priority
				alt=""
				src={image}
				draggable={false}
				unoptimized
				fill
				className="image-like-bg object-top"
			/>
			{Detail && <Detail />}
		</div>
	)
}
