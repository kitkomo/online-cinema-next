import { FC } from 'react'
import makeAnimated from 'react-select/animated'
import { OnChangeValue } from 'react-select/dist/declarations/src'
import ReactSelect from 'react-select'
import cl from './Select.module.scss'
import { IOption, ISelect } from './select.interface'
import formStyles from './../formElements/form.module.scss'

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({
	field,
	placeholder,
	options,
	error,
	isMulti,
	isLoading
}) => {
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((item) => item.value)
				: (newValue as IOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => (option.value = field.value))
		} else return isMulti ? [] : ''
	}

	return (
		<div className={cl.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix='custom-select'
					options={options}
					value={getValue()}
					isMulti={isMulti}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
				/>
				{error && <div className={formStyles.error}>{error.message}</div>}
			</label>
		</div>
	)
}

export default Select
