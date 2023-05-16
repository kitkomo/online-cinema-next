import Heading from "@/components/UI/heading/Heading"
import Meta from "@/utils/meta/Meta"
import { NextPage } from "next"


const NotFound: NextPage = () => {
	return (
		<Meta title='Page not found'>
			<Heading title='404 - Page not found'/>
		</Meta>
	)
}

export default NotFound