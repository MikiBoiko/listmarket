import { IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonPopover } from "@ionic/react"
import type { Product, ProductCategory } from "../../context/appContext"
import { leafOutline, fishOutline, ellipsisVertical } from "ionicons/icons"
import grocery from "../../svg/grocery.svg"
import fruit from "../../svg/fruit.svg"
import household from "../../svg/household.svg"
import wc from "../../svg/wc.svg"

type ProductProps = {
    product: Product
}

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

const ProductElement: React.FC<ProductProps> = ({ product }: ProductProps) => {
    const { id, name, category } = product

    const popoverId = `options-${id}`

    return (
        <IonItem>
            <IonIcon slot="start" aria-hidden={true} icon={productIcons[category]} />
            <IonLabel style={{padding: ".5rem"}}>{name}</IonLabel>
            <IonButtons slot="end">
                <IonButtons>
                    <IonButton id={popoverId} shape="round">
                        <IonIcon icon={ ellipsisVertical } />
                    </IonButton>
                    <IonPopover trigger={popoverId}>
                        <IonItem>Hola machete</IonItem>
                    </IonPopover>
                </IonButtons>
            </IonButtons>
        </IonItem>
    )
}

export default ProductElement