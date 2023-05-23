import { FC } from 'react'
import cl from './AuthPlaceholder.module.scss'
import AuthButton from './AuthButton'
const AuthPlaceholder: FC<{slug: string}> = ({slug}) => {
	return (
		<div className={cl.placeholder}>
			<div>You must sign in to start watching</div>
			<AuthButton slug={slug}/>
		</div>
	)
}

export default AuthPlaceholder