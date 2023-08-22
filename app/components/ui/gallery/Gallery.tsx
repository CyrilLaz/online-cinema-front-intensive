import { FC } from 'react'

import styles from './Gallery.module.scss'
import { IGalleryItem } from './gallery.interface'
import GalleryItem from './GalleryItem'

const Gallery: FC<{items:IGalleryItem[]}> = ({items}) => {
	return <div className={styles.gallery}>{items.map(item=><GalleryItem variant='vertical' key={item.link} item={item}/>)}</div>
}
export default Gallery
