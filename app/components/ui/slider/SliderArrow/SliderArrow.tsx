import classNames from 'classnames'
import { FC } from 'react'

import MaterialIcon from '../../MaterialIcon'

import styles from './SliderArrow.module.scss'

interface ISliderArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}
const SliderArrow: FC<ISliderArrow> = ({ clickHandler, variant }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={classNames(styles.arrow, {
				[styles.left]: isLeft,
				[styles.right]: !isLeft,
			})}
		>
			<MaterialIcon name={isLeft ? 'MdArrowLeft' : 'MdArrowRight'} />
		</button>
	)
}
export default SliderArrow
