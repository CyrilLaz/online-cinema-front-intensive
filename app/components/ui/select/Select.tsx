import { FC } from 'react'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'

import styles from './Select.module.scss'
import { IOption, ISelect } from './select.interface'

const animatedComponent = makeAnimated()

const Select: FC<ISelect> = ({
	field,
	options,
	placeholder,
	isLoading,
	isMulti,
	error,
}) => {
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item) => item.value)
				: (newValue as IOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value)
		} else {
			isMulti ? [] : ''
		}
	}
	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					value={getValue()}
					components={animatedComponent}
					options={options}
					isMulti={isMulti}
					isLoading={isLoading}
					onChange={onChange}
				/>
			</label>
			{error && <span className={styles.error}>{error.message}</span>}
		</div>
	)
}
export default Select
