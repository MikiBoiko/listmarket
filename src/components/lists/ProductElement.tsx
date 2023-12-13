import { IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonPopover } from "@ionic/react"
import type { Product } from "../../context/appContext"
import { ellipsisVertical, createOutline, trashOutline } from "ionicons/icons"
import productIcons from "../Misc"

type ProductProps = {
    product: Product
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
                    <IonPopover className="ion-no-padding" trigger={popoverId}>
                        <IonItem>
                            <IonIcon slot="start" icon={createOutline} />
                            <IonLabel>Edit</IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonIcon color="danger" slot="start" icon={trashOutline} />
                            <IonLabel color="danger">Remove</IonLabel>
                        </IonItem>
                    </IonPopover>
                </IonButtons>
            </IonButtons>
        </IonItem>
    )
}

export default ProductElement