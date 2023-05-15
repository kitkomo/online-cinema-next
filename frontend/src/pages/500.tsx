import Heading from "@/components/UI/heading/Heading"
import Meta from "@/utils/meta/Meta"

const ServerError = () => {
	return (
		<Meta title='Page not found'>
			<Heading title='500 - Server-side error occurred'/>
		</Meta>
	)
}

export default ServerError