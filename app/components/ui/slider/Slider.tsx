import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideItem from './SlideItem'
import SliderArrow from './SliderArrow/SliderArrow'
import { ISlide } from './slider.interface'
import { useSlider } from './useSlider'

import styles from './Slider.module.scss'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { handleClick, index, isSlideIn, isNext, isPrev } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			<CSSTransition in={isSlideIn} classNames="slider-animation" timeout={300} unmountOnExit>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
			{isPrev && (
				<SliderArrow
					variant="left"
					clickHandler={() => {
						handleClick('prev')
					}}
				/>
			)}
			{isNext && (
				<SliderArrow
					variant="right"
					clickHandler={() => {
						handleClick('next')
					}}
				/>
			)}
		</div>
	)
}
export default Slider
