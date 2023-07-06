import { NextPage } from 'next'

export type TypeRoles = {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = TypeRoles & NextPage<P>

export type TypeComponentAuthFields = { Component: TypeRoles }
