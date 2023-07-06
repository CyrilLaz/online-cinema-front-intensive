import { ReactNode } from 'react'

export type withChildren<P={}> = {
	children: ReactNode
} & P
