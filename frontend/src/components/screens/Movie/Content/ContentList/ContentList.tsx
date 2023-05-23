import Link from 'next/link'
import { FC, Fragment } from 'react'

import { IContentList } from '../content.interface'

import cl from './ContentList.module.scss'

const ContentList: FC<IContentList> = ({ links, name }) => {
	return (
		<div className={cl.list}>
			<div className={cl.name}>{name}</div>
			<div className={cl.links}>
				{links.map((link, index) => (
					<Fragment key={index}>
						<Link href={link.link}>{link.title}</Link>
						{index + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
