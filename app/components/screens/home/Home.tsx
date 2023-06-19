import { FC } from "react"
import { Home } from "./Home.interface"
import Meta from "@/utils/meta/Meta"
import Heading from "@/components/ui/heading/Heading"

const Home: FC<Home> = () => {
  return (
    <Meta title="Watch movie online" description='A cinema is a place where people go to watch films for entertainment. The country has relatively few cinemas.'>
      <Heading title="Watch movie online" className="text-gray-300 text-xl mb-8"/>
      <h1>Home page</h1>
    </Meta>
  )
}

export default Home