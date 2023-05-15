import cn from 'classnames'
import { forwardRef } from 'react'

import { IField } from './form.interface'
import cl from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(cl.common, cl.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} autoComplete='off'/>
				</label>
				{error && <div className={cl.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
