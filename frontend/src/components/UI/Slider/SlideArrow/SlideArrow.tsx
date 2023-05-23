import cn from 'classnames'
import { FC } from 'react'

import { MaterialIcon } from '../../icons/MaterialIcon'

import cl from './SlideArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}

const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={cn(cl.arrow, {
				[cl.left]: isLeft,
				[cl.right]: !isLeft
			})}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}

export default SlideArrow
