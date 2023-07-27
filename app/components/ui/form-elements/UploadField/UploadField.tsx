import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import SkeletonLoader from '../../Skeleton'
import { IUploadField } from '../form.interface'
import styles from '../form.module.scss'

import stylesUpload from './UploadField.module.scss'
import { useUpload } from './useUpload'

const UploadField: FC<IUploadField> = ({
	onChange,
	placeholder,
	error,
	folder,
	isNoImage = false,
	style,
	value,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder)

	return (
		<div
			className={classNames(styles.field, stylesUpload.uploadField)}
			style={style}
		>
			<div className={stylesUpload.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={stylesUpload.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							value && <Image alt="" fill src={value} unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}
export default UploadField
