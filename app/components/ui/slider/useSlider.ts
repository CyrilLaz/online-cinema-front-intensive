import { useState } from 'react'

export const useSlider = (length: number) => {
	const [currentIdx, setCurrentIdx] = useState(0)
	const [isSlideIn, setIsSlideIn] = useState(true)

	const isNextSlideExist = currentIdx + 1 < length
	const isPrevSlideExist = currentIdx ? currentIdx - 1 < length : false

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex = { next: currentIdx + 1, prev: currentIdx - 1 }[direction]
		setIsSlideIn(false)

		setTimeout(() => {
			setCurrentIdx(newIndex)
			setIsSlideIn(true)
		}, 300)
	}

	return {
		isSlideIn,
		index: currentIdx,
		isNext: isNextSlideExist,
		isPrev: isPrevSlideExist,
		handleClick: handleArrowClick,
	}
}
