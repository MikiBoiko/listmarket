import { createContext } from "react"

type Profile = {
    name: string
}

type List = {
    id: string
    name: string
}

type ProductCategory = "grocery" | "fish" | "fruit" | "veggies" | "hygienic" | "household"

type Product = {
    id: string
    name: string
    category: ProductCategory
}

type ListState = {
    products: Product[]
}

type AppContext = {
    profile: Profile | undefined
    currentListState: ListState | undefined
    lists: List[]
}

interface ChatEvent {
    type: "missing" | "shop" | "message"
    sender: Profile
} 

interface ChatMissing extends ChatEvent {
    product: Product
}

interface ChatShop {
    
}

const appContext = createContext<AppContext>({
    profile: undefined,
    currentListState: undefined,
    lists: []
})

export type { Profile, Product, ProductCategory, List, ListState }
export default appContext