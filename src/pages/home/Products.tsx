import { IonIcon, IonItem, IonLabel, IonList } from "@ionic/react"
import { searchOutline, starOutline, refresh, add, scanOutline } from "ionicons/icons"

const Products = () => {
    return (
        <>
            <IonList className="ion-no-padding" inset={true} lines="full">
                <IonItem routerLink="/">
                    <IonIcon slot="start" icon={searchOutline} />
                    <IonLabel>Search product...</IonLabel>
                </IonItem>
                <IonItem routerLink="/">
                    <IonIcon slot="start" icon={starOutline} />
                    <IonLabel>Your favourites...</IonLabel>
                </IonItem>
                <IonItem routerLink="/">
                    <IonIcon slot="start" icon={refresh} />
                    <IonLabel>Recently used...</IonLabel>
                </IonItem>
            </IonList>
            <IonList className="ion-no-padding" inset={true} lines="full">
                <IonItem routerLink="/">
                    <IonIcon slot="start" icon={add} />
                    <IonLabel>Add a product...</IonLabel>
                </IonItem>
                <IonItem routerLink="/">
                    <IonIcon slot="start" icon={scanOutline} />
                    <IonLabel>Scan a product...</IonLabel>
                </IonItem>
            </IonList>
        </>
    )
}

export default Products