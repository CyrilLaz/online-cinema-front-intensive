import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import logoImage from "@/assets/images/logo.svg";

const Logo: FC = () => {
	return (
		<Link className="px-layout mb-10 block" href="/">
			<Image src={logoImage} alt='logo' width={247} height={34} draggable={false}/>
		</Link>
	)
}

export default Logo
