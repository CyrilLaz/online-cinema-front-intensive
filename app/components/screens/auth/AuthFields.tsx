import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import MyField from '@/ui/form-elements/MyField'

import { validEmail } from '@/shared/regex'

interface IAuthField {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthField> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<MyField
				placeholder="E-mail"
				error={errors?.email}
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please, enter a valid email',
					},
				})}
			/>
			<MyField
				placeholder="Password"
				type="password"
				error={errors?.password}
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters',
								},
						  }
						: {}
				)}
			/>
		</>
	)
}
export default AuthFields
