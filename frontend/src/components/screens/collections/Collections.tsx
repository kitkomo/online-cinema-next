import { FC } from 'react'

import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'

import { Meta } from '@/utils/meta'

import CollectionItem from './CollectionItem'
import cl from './Collections.module.scss'
import { ICollection } from './collections.types'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={cl.heading} />
			<Description text={description} className={cl.description} />

			<section className={cl.collections}>
				{collections.map((collection) => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
