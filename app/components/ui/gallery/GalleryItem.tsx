import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryItemProps } from './gallery.interface'

const GalleryItem: FC<IGalleryItemProps> = ({
	item: { link, posterPath, content, name },
	variant,
}) => {
	return (
		<Link
			href={link}
			className={classNames(styles.item, {
				[styles.withText]: content,
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical',
			})}
		>
			<Image className={styles.img} fill draggable={false} priority alt={name} src={posterPath} />
			{content && (
				<div className={styles.content}>
					<h3 className={styles.title}>{content.title}</h3>
					{content.subtitle && (
						<p className={styles.subtitle}>{content.subtitle}</p>
					)}
				</div>
			)}
		</Link>
	)
}
export default GalleryItem
