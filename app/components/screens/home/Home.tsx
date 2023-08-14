import { FC } from "react"
import { IHome } from "./Home.interface"
import Meta from "@/utils/meta/Meta"
import Heading from "@/components/ui/heading/Heading"
import Slider from "@/components/ui/slider/Slider"

const Home: FC<IHome> = ({slides}) => {
  return (
    <Meta title="Watch movie online" description='A cinema is a place where people go to watch films for entertainment. The country has relatively few cinemas.'>
      <Heading title="Watch movie online" className="text-gray-300 text-xl mb-8"/>
     <Slider slides={slides}/>
    </Meta>
  )
}

export default Home