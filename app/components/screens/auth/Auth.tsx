import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import MyButton from '@/components/ui/form-elements/MyButton'
import Heading from '@/components/ui/heading/Heading'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth = () => {
	useAuthRedirect()
	const { login, register } = useActions()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else register(data)
		reset()
	}
	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" />
					<AuthFields
						register={registerInput}
						formState={formState}
						isPasswordRequired
					/>
					<div className={styles.buttons}>
						<MyButton type="submit" onClick={() => setType('login')}>
							Login
						</MyButton>
						<MyButton type="submit" onClick={() => setType('register')}>
							Register
						</MyButton>
					</div>
				</form>
			</section>
		</Meta>
	)
}
export default Auth
