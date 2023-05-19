
import { FC } from 'react';
import { IUploadField } from '../form.interface';
import { useUpload } from './useUpload';
import cn from 'classnames'
import SkeletonLoader from '../../SkeletonLoader';
import Image from 'next/image';
import cl from './../form.module.scss'

const UploadField: FC<IUploadField> = ({error, folder, placeholder, style, value, onChange, isNoImage = false}) => {
	const {isLoading, uploadFile} = useUpload(onChange, folder)
	return (
			<div className={cn(cl.field, cl.uploadField)} style={style}>
			<div className={cl.uploadFlex}>
				<label>
					<span>{placeholder}</span> 
					<input type="file" onChange={uploadFile} />
					{error && <div className={cl.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={cl.uploadFileContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							value && <Image src={value} alt="" width={100} height={100} unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField