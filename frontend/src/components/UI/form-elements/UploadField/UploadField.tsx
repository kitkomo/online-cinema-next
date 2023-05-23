import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'
import { IUploadField } from '../form.interface'
import cl from '../form.module.scss'

import { useUpload } from './useUpload'

const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	style,
	image,
	folder,
	onChange,
	isNoImage = false
}) => {
	const { uploadImage, isLoading } = useUpload(onChange, folder)

	return (
		<div className={cn(cl.field, cl.uploadField)} style={style}>
			<div className={cl.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadImage} />
					{error && <div className={cl.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={cl.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							image && <Image src={image} alt="" layout="fill" unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
