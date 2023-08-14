import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'

interface ISliderItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISliderItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()

	return (
		<div className={styles.slide}>
			{slide.bigPoster && (
				<Image
					fill
					src={slide.bigPoster}
					alt={slide.title}
					className={styles.image}
					draggable={false}
					unoptimized
					priority
				/>
			)}
			<div className={styles.content}>
				<h3 className={styles.heading}>{slide.title}</h3>
				<p className={styles.subheading}>{slide.subtitle}</p>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}
export default SlideItem
