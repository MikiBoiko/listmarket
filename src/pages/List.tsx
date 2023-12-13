import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonToolbar } from "@ionic/react"
import { caretBackOutline, cartOutline, chatbubbleOutline, peopleOutline, listOutline } from "ionicons/icons"
import { Route } from "react-router"
import ShoppingList from "./list/ShoppingList"
import Chat from "./list/Chat"
import ShoppingModal from "../components/modals/ShoppingModal"

const List: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={caretBackOutline}></IonBackButton>
                    </IonButtons>
                    <IonTitle>ListMarket</IonTitle>
                    <IonButtons slot="end">
                        <IonButton size="large" shape="round">
                            <IonIcon style={{padding: ".5rem"}} icon={peopleOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRouterOutlet>
                    <Route path="/list/products" render={() => <ShoppingList />} />
                    <Route path="/list/chat" render={() => <Chat />} />
                </IonRouterOutlet>
            </IonContent>
            <IonTabBar>
                <IonTabButton tab="list" href="/list/products">
                    <IonIcon icon={listOutline} />
                    <IonLabel>List</IonLabel>
                </IonTabButton>
                <IonTabButton>
                    <IonButton shape="round" color="tertiary" fill="outline" id="start-shopping">
                        <IonIcon icon={cartOutline} />
                        <IonLabel>Start Shopping</IonLabel>
                    </IonButton>
                    <ShoppingModal trigger="start-shopping" />
                </IonTabButton>
                <IonTabButton tab="chat" href="/list/chat">
                    <IonIcon icon={chatbubbleOutline} />
                    <IonLabel>Chat</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonPage>
    )
}

export default List;