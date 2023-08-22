import { FC } from 'react'

import Meta from '@/utils/meta/Meta'

import { getMovieUrl } from '@/config/url.config'

import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

import styles from './Catalog.module.scss'
import { ICatalog } from './cataloog.interface'

const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.description} />
			)}
			<section className={styles.movies}>
				{movies.map((m) => (
					<GalleryItem
						item={{
							link: getMovieUrl(m.slug),
							name: m.title,
							posterPath: m.bigPoster,
							content: { title: m.title },
						}}
						key={m._id}
						variant="horizontal"
					/>
				))}
			</section>
		</Meta>
	)
}
export default Catalog
