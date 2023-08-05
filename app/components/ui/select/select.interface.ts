import { Options } from "react-select"
import { IField } from "../form-elements/form.interface"
import { ControllerRenderProps } from "react-hook-form"

export interface IOption {
	value: string
	label: string
}

export interface ISelect extends IField {
    options:Options<IOption>
    isMulti?: boolean
    field: ControllerRenderProps<any,any>
    isLoading?: boolean
}