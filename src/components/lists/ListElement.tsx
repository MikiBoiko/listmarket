import { IonIcon, IonItem, IonLabel } from "@ionic/react"
import type { List } from "../../context/appContext"
import { list as listIcon } from "ionicons/icons"

type ListProps = {
    list: List
}

const ListElement: React.FC<ListProps> = ({ list }: ListProps) => {
    const { id, name } = list

    return (
        <IonItem routerLink={`/list/products`}>
            <IonIcon slot="start" aria-hidden={true} icon={listIcon} />
            <IonLabel style={{ padding: ".5rem" }}>{name}</IonLabel>
        </IonItem>
    )
}

export default ListElement