import { FC } from 'react'
import style from './Navigation.module.scss'
import Logo from './Logo'
import MenuContainer from './MenuContainer/MenuContainer'
const Navigation:FC = () => {
  return (
    <div className={style.navigation}>
      <Logo/>
      <MenuContainer/>
    </div>
  )
}

export default Navigation