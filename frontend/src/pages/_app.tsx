import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

import Layout from '@/components/layout/Layout'

import '@/assets/scss/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MainProvider>
	)
}
