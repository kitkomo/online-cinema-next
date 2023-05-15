import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/components/layout/Layout'

import { store } from '@/store/store'

import ReduxToast from './ReduxToast'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToast />
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
