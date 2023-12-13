import { IonButton, IonIcon, IonLabel, IonList } from "@ionic/react"
import { add } from "ionicons/icons"
import { useContext } from "react"
import appContext from "../../context/appContext"
import ProductElement from "../../components/lists/ProductElement"

const NewProductElement: React.FC = () => {
    return (
        <IonButton expand="full" fill="clear" color="dark">
            <IonIcon icon={add} />
            <div style={{ padding: ".5rem" }}>
                <IonLabel>
                    Add Product
                </IonLabel>
            </div>
        </IonButton>
    )
}

const ShoppingList: React.FC = () => {
    const { currentListState } = useContext(appContext)

    console.log(currentListState)

    if (currentListState === undefined)
        return (
            <></>
        )

    return (
        <>
            <IonList className="ion-no-padding">
                {
                    currentListState.products.map((product, index) => {
                        return (
                            <ProductElement key={index} product={product} />
                        )
                    })
                }
                <NewProductElement />
            </IonList>
        </>
    )
}

export default ShoppingList