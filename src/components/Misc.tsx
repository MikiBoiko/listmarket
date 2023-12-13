import { leafOutline, fishOutline } from "ionicons/icons"
import grocery from "../svg/grocery.svg"
import fruit from "../svg/fruit.svg"
import household from "../svg/household.svg"
import wc from "../svg/wc.svg"
import { ProductCategory } from "../context/appContext"

type CategoryIconMap = {
    [K in ProductCategory]: string
}

const productIcons: CategoryIconMap = {
    grocery,
    fish: fishOutline,
    fruit,
    veggies: leafOutline,
    hygienic: wc,
    household
}

export default productIcons