import { TypeMaterialIconNames } from "@/shared/types/icon.types"

export interface IMenuItem {
    icon: TypeMaterialIconNames
    title: string
    link: string
}
export interface IMenu {
    title: string
    items: IMenuItem[]
}