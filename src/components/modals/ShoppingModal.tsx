import { IonButton, IonButtons, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from "@ionic/react"
import { OverlayEventDetail } from "@ionic/react/dist/types/components/react-component-lib/interfaces";
import { useContext, useRef, useState } from "react";
import appContext, { Product } from "../../context/appContext";
import productIcons from "../Misc";

type ShoppingProductElementProps = {
    product: Product
}

const ShoppingProductElement = ({ product }: ShoppingProductElementProps) => {
    const [checked, setChecked] = useState(false)
    const { category, name } = product

    return (
        <IonItem color={ checked ? "medium" : "" }>
            <IonIcon slot="start" icon={productIcons[category]} />
            <IonCheckbox onIonChange={(ev: any) => { setChecked(!checked) }}>
                <div
                    style={{
                        textDecoration: checked ? "line-through" : "none"
                    }}
                >
                    {name}
                </div>
            </IonCheckbox>
        </IonItem>
    )
}

type ShoppingModalProps = {
    trigger: string
}

const ShoppingModal: React.FC<ShoppingModalProps> = ({ trigger }: ShoppingModalProps) => {
    const { currentListState } = useContext(appContext)

    if (currentListState === undefined)
        return <>Empty list?</>

    const { products } = currentListState

    const modal = useRef<HTMLIonModalElement>(null);

    function confirm() {
        modal.current?.dismiss('confirm');
    }

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        if (ev.detail.role === 'confirm') {
            console.log('dismiss')
        }
    }

    return (
        <IonModal ref={modal} trigger={trigger} onWillDismiss={(ev) => onWillDismiss(ev)}>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton strong={true} onClick={() => confirm()}>
                            Confirm
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList className="ion-no-padding" inset={true}>
                    {
                        products.map((product, index) => {
                            return (
                                <ShoppingProductElement key={index} product={product} />
                            )
                        })
                    }
                </IonList>
            </IonContent>
        </IonModal>
    )
}

export default ShoppingModal