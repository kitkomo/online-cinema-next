import { FC } from 'react'
import cl from './Search.module.scss'
import { useSearch } from './SearchList/useSearch'
import SearchList from './SearchList/SearchList'
import SearchField from '@/components/UI/SearchField/SearchField'

const Search: FC = () => {

	const {isSuccess, handleSearch, data, searchTerm} = useSearch()

	return (
		<div className={cl.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
			{isSuccess && <SearchList movies={data || []}/>}
		</div>
	)
}

export default Search