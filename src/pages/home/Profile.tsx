import { peopleOutline, exitOutline, cogOutline, personCircleOutline } from "ionicons/icons"
import { IonAvatar, IonButton, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react"

const Profile: React.FC = () => {
    return (
        <>
            <IonItem className="ion-padding">
                <IonAvatar slot="start">
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                </IonAvatar>
                <IonLabel>Your username.</IonLabel>
            </IonItem>
            <IonList className="ion-no-padding" inset={true} lines="full">
                <IonItem routerLink="/">
                    <IonIcon slot="start" icon={personCircleOutline} />
                    <IonLabel>EDIT PROFILE</IonLabel>
                </IonItem>
                <IonItem routerLink="/">
                    <IonIcon slot="start" icon={peopleOutline} />
                    <IonLabel>FRIENDS</IonLabel>
                </IonItem>
                <IonItem routerLink="/">
                    <IonIcon slot="start" icon={cogOutline} />
                    <IonLabel>SETTINGS</IonLabel>
                </IonItem>
            </IonList>
            <IonButton expand="full" fill="outline" color="danger">
                <IonIcon icon={exitOutline} />
                <div style={{padding: '.5rem'}}>
                    LOG OUT
                </div>
            </IonButton>
        </>
    )
}

export default Profile