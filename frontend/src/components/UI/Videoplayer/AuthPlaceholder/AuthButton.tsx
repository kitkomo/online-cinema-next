import { getMovieUrl } from '@/configs/url.config'
import Link from 'next/link'
import cl from './AuthPlaceholder.module.scss'
import { FC } from 'react'

const AuthButton: FC<{slug: string}> = ({slug}) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={cl.btn}>
			Sign In
		</Link>
	)
}

export default AuthButton