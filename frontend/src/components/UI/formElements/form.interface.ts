import {ButtonHTMLAttributes, InputHTMLAttributes} from 'react'
// import {FieldError, FieldErrorsImpl, Merge} from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string
	// error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
	error?: any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}