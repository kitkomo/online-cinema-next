import Link from 'next/link'
import { FC } from 'react'

import { getMovieUrl } from '@/configs/url.config'

import cl from './AuthPlaceholder.module.scss'

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={cl.btn}>
			Sign in
		</Link>
	)
}

export default AuthButton
