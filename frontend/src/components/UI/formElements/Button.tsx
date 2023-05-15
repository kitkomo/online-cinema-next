import cn from 'classnames'
import { FC } from 'react'

import { IButton } from './form.interface'
import cl from './form.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return <button className={cn(cl.button, className)} {...rest}>{children}</button>
}

export default Button
