import classNames from 'classnames'
import { forwardRef } from 'react'

import { IField } from './form.interface'
import styles from './form.module.scss'

const MyField = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type = 'text', error, style, ...rest }, ref) => {
		return (
			<div className={classNames(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <span className={styles.error}>{error.message}</span>}
			</div>
		)
	}
)
MyField.displayName = 'Field'

export default MyField
