import { TypeMaterialIconNames } from "@/shared/types/icon.types"
import { FC } from "react"
import * as MaterialIcons from "react-icons/md";
const MaterialIcon:FC<{name:TypeMaterialIconNames}> = ({name}) => {
const IconComponent = MaterialIcons[name]
    return (
  <IconComponent/> || <MaterialIcons.MdEmergency/>
  )
}

export default MaterialIcon