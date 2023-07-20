import { EditorProps } from 'draft-js'
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: { message?: string } | undefined
}

type TypeEditorTextFieldProps = IField & EditorProps
export interface ITextEditor
	extends Omit<TypeEditorTextFieldProps, 'editorState'> {
	value: string
	onChange: (...event:any[]) => void
}
