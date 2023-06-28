import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import { FieldError, FieldErrors } from 'react-hook-form'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	error?: {message?:string} | undefined
}
