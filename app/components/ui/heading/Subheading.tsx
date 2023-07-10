import { FC } from "react"

const Subheading:FC<{title:string}> = ({title}) => {
  return (
    <h2 className='text-white font-semibold mb-5 text-lg'>{title}</h2>
  )
}
export default Subheading 