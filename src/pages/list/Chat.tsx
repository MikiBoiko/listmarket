import { useState } from "react"
import { IonAvatar, IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonList, IonPopover, IonTextarea } from "@ionic/react"
import { add, send, mic, alert } from "ionicons/icons"

const Message: React.FC = () => {
    return (
        <IonItem>
            <IonAvatar slot="start">

            </IonAvatar>
        </IonItem>
    )
}

const Chat: React.FC = () => {
    const [userMessage, setUserMessage] = useState<string>()

    const actionButton = (
        <>
            <IonButton id="action-button" shape="round" color="primary" fill="solid">
                <IonIcon className="ion-padding" icon={add} />
            </IonButton>
            <IonPopover trigger="action-button" side="top" alignment="center">
                <IonList className="ion-no-padding">
                    <IonButton fill="clear" expand="full">
                        <IonIcon slot="start" icon={alert} />
                        <IonLabel>Missing product</IonLabel>
                    </IonButton>
                    <IonButton fill="clear" expand="full">
                        <IonIcon slot="start" icon={mic} />
                        Audio message
                    </IonButton>
                </IonList>
            </IonPopover>
        </>
    )

    const sendButton = (
        <IonButton shape="round" color="primary" fill="solid">
            <IonIcon className="ion-padding" icon={send} />
        </IonButton>
    )

    const onInput = (ev: Event) => {
        const value = (ev.target as HTMLTextAreaElement).value
        setUserMessage(value)
    }

    return (
        <>
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end"
                }}
            >
                <IonItem lines="none">
                    <IonTextarea onIonInput={onInput} label="Write a message..." labelPlacement="floating" />
                    <IonButtons slot="end">
                        { userMessage !== undefined && userMessage.length > 0 ? sendButton : actionButton }
                    </IonButtons>
                </IonItem>
            </div>
        </>
    )
}

export default Chat