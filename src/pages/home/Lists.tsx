import { useContext } from "react"
import appContext from "../../context/appContext"
import ListElement from "../../components/lists/ListElement"
import { add } from "ionicons/icons"
import { IonButton, IonIcon, IonLabel, IonList } from "@ionic/react"

const NewListElement: React.FC = () => {
    return (
        <IonButton expand="full" fill="clear" color="dark">
            <IonIcon icon={add} />
            <div style={{ padding: ".5rem" }}>
                <IonLabel>
                    Create List
                </IonLabel>
            </div>
        </IonButton>
    )
}

const Lists: React.FC = () => {
    const { lists } = useContext(appContext)

    console.log(lists)

    return (
        <>
            <IonList className="ion-no-padding">
                {
                    lists.map((list, index) => {
                        return (
                            <ListElement key={index} list={list} />
                        )
                    })
                }
                <NewListElement />
            </IonList>
        </>
    )
}

export default Lists