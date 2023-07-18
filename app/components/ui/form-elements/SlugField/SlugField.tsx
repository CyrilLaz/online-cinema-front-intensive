import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import MyField from '../MyField'

import styles from './SlugField.module.scss'

interface ISlugField {
	register: UseFormRegister<any>
	error?: FieldError
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ error, register, generate }) => {
	return (
		<div className="relative">
			<MyField
				placeholder="Slug"
				error={error}
				{...register('slug', { required: 'Slug is required' })}
			/>
			<button type='button' className={styles.badge} onClick={generate}>
				Generate
			</button>
		</div>
	)
}
export default SlugField
