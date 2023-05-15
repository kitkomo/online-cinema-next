import { FC } from "react"
import ReduxToastr from "react-redux-toastr"


const ReduxToast: FC = () => {
	return (
		<ReduxToastr
			newestOnTop={true}
			preventDuplicates
			progressBar
			closeOnToastrClick
			timeOut={4000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ReduxToast