import Heading from "@/components/UI/heading/Heading"
import Meta from "@/utils/meta/Meta"
import { NextPage } from "next"

const ServerError:NextPage = () => {
	return (
		<Meta title='Page not found'>
			<Heading title='500 - Server-side error occurred'/>
		</Meta>
	)
}

export default ServerError