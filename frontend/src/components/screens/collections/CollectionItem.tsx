import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { getGenreUrl } from '@/configs/url.config'

import CollectionImage from './CollectionImage'
import cl from './Collections.module.scss'
import { ICollection } from './collections.types'

const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => {
	return (
		<Link href={getGenreUrl(collection.slug)} className={cl.collection}>
			className={cl.collection}
			<CollectionImage collection={collection} />
			<div className={cl.content}>
				<div className={cl.title}>{collection.title}</div>
			</div>
			<div className={`${cl.behind} ${cl.second}`}>
				<CollectionImage collection={collection} />
			</div>
			<div className={`${cl.behind} ${cl.third}`}>
				<CollectionImage collection={collection} />
			</div>
		</Link>
	)
}

export default CollectionItem
