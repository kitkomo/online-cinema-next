import { EditorProps, EditorState } from 'draft-js'
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes, ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

export interface IFieldProps {
	placeholder: string
	// error?: FieldError | undefined
	error?: any
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
export interface IUploadField {
	folder?: string
	image?: string
	onChange: (...event: any[]) => void
	placeholder: string
	// error?: FieldError
	error?: any
	style?: CSSProperties
	isNoImage?: boolean
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

type TypeEditorPropsField = EditorProps & IFieldProps

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
	onChange: (...event: any[]) => void
	value: string
}
