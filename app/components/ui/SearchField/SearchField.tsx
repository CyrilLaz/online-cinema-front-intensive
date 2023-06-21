import { FC } from 'react'

import MaterialIcon from '../MaterialIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input
				type="text"
				placeholder="Search"
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField
