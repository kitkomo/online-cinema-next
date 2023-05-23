import cn from 'classnames'
import { FC } from 'react'


import cl from './form.module.scss'
import { IButton } from './form.interface'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(cl.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
