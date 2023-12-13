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
interface ChatEvent {
    type: "missing" | "shop" | "message"
    sender: Profile
    data: any
}

interface ChatMissing extends ChatEvent {
    type: "missing"
    data: {
        product: Product
    }
}

interface ChatShop extends ChatEvent {
    type: "shop"
    data: {
        products: Product[]
    }
}

interface ChatMessage extends ChatEvent {
    type: "message"
    data: {
        message: string
    }
}

type AppContext = {
    profile: Profile | undefined
    currentListState: ListState | undefined
    currentChatState: ChatEvent[]
    lists: List[]
}


const appContext = createContext<AppContext>({
    profile: undefined,
    currentListState: undefined,
    currentChatState: [],
    lists: []
})

export type {
    Profile,
    Product,
    ProductCategory,
    List,
    ListState,
    ChatEvent,
    ChatMissing,
    ChatShop,
    ChatMessage
}
export default appContext