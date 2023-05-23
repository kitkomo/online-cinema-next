import Link from 'next/link'
import { FC, Fragment } from 'react'

import cl from './ContentList.module.scss'

interface ILink {
	_id: string
	link: string
	title: string
}

interface IContentList {
	name: string
	links: ILink[]
}

const ContentList: FC<IContentList> = ({ name, links }) => {
	return (
		<div className={cl.list}>
			<div className={cl.name}>{name}:</div>
			<div className={cl.links}>
				{links.slice(0, 3).map(({ link, title, _id }, idx) => (
					<Fragment key={_id}>
						<Link href={link}>{title}</Link>
						{idx + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default ContentList
