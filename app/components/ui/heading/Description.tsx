import classNames from 'classnames'
import parse from 'html-react-parser'
import { FC } from 'react'

const Description: FC<{ text: string; className: string }> = ({
	className = '',
	text,
}) => {
	return (
		<div className={classNames(className, 'text-lg text-white font-light text-opacity-60')}>{parse(text)}</div>
	) // TODO: this classnames should be
}
export default Description
