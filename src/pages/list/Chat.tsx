import { useContext, useState } from "react"
import { IonAvatar, IonButton, IonButtons, IonIcon, IonItem, IonLabel, IonList, IonPopover, IonTextarea } from "@ionic/react"
import { add, send, mic, alert, cartOutline } from "ionicons/icons"
import appContext, { ChatEvent, ChatMessage, ChatMissing, ChatShop } from "../../context/appContext"
import productIcons from "../../components/Misc"

const Message: React.FC<ChatMessage> = ({ sender, data }: ChatMessage) => {
    return (
        <IonItem color={sender.name === 'you' ? "success" : "primary"} style={{ padding: ".5rem", borderRadius: "2rem" }}>
            <IonAvatar slot={sender.name === 'you' ? "end" : "start"}>
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </IonAvatar>
            <div>
                <div style={{ textDecoration: "underline" }}>{sender.name}</div>
                <div>{data.message}</div>
            </div>
        </IonItem>
    )
}

const Missing: React.FC<ChatMissing> = ({ sender, data }: ChatMissing) => {
    return (
        <IonItem color={sender.name === 'you' ? "success" : "warning"} style={{ padding: ".5rem", borderRadius: "2rem" }}>
            <IonIcon slot={sender.name === 'you' ? "end" : "start"} icon={productIcons[data.product.category]} size="large" />
            <div>
                <div style={{ textDecoration: "underline" }}>{sender.name}</div>
                <div>Missing {data.product.name}!</div>
            </div>
        </IonItem>
    )
}

const Shop: React.FC<ChatShop> = ({ sender, data }: ChatShop) => {
    return (
        <IonItem color={"medium"} style={{ padding: ".5rem", borderRadius: "2rem" }}>
            <IonIcon slot={sender.name === 'you' ? "end" : "start"} icon={cartOutline} size="large" />
            <div>
                <div style={{ textDecoration: "underline" }}>{sender.name}</div>
                <div>Bought products:</div>
                <div>
                    {
                        data.products.map((product, index) => {
                            return (
                                <div key={index} style={{display: "flex", alignItems: "center"}} className="ion-no-padding">
                                    <IonIcon size="small" style={{padding: ".5rem"}} slot="start" icon={productIcons[product.category]} />
                                    <div>
                                        {product.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </IonItem>
    )
}

const Chat: React.FC = () => {
    const { currentChatState } = useContext(appContext)

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

    const fabricateEvent = (key: number, chatEvent: ChatEvent) => {
        const { type, sender, data } = chatEvent

        switch (type) {
            case "message":
                return <Message key={key} type={type} sender={sender} data={data} />
            case "missing":
                return <Missing key={key} type={type} sender={sender} data={data} />
            case "shop":
                return <Shop key={key} type={type} sender={sender} data={data} />
            default:
                return null
        }
    }

    return (
        <>
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "end"
                }}
            >
                <IonItem lines="none" style={{paddingBottom: '.75rem'}}>
                    <IonTextarea onIonInput={onInput} label="Write a message..." labelPlacement="floating" />
                    <IonButtons slot="end">
                        {userMessage !== undefined && userMessage.length > 0 ? sendButton : actionButton}
                    </IonButtons>
                </IonItem>
                <IonList lines="none" style={{overflowY: "auto"}}>
                    {
                        currentChatState.map((chatEvent, index) => {
                            return fabricateEvent(index, chatEvent)
                        })
                    }
                </IonList>
            </div>
        </>
    )
}

export default Chat