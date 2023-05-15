import { ChangeEvent, FC } from "react"
import cl from './SearchField.module.scss'
import MaterialIcon from "../MaterialIcon"

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({searchTerm, handleSearch}) => {
	return (
		<div className={cl.search}>
			<MaterialIcon name='MdSearch'/>
			<input type="text" placeholder='Search' value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField