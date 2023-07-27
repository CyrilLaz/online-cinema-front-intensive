import { EditorProps } from 'draft-js'
import { ButtonHTMLAttributes, CSSProperties, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: { message?: string } | undefined
}

type TypeEditorTextFieldProps = IField & EditorProps
export interface ITextEditor
	extends Omit<TypeEditorTextFieldProps, 'editorState'> {
	value: string
	onChange: (...event: any[]) => void
}

export interface IUploadField {
	folder?: string
	value?: string
	onChange: (...event: any[]) => void
	placeholder: string
	error?: FieldError
	style?: CSSProperties
	isNoImage?: boolean
}
