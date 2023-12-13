import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTitle, IonToolbar } from "@ionic/react";
import { listOutline, personOutline } from "ionicons/icons";
import Profile from "./home/Profile";
import { Route } from "react-router";
import Lists from "./home/Lists";
import grocery from "../svg/grocery.svg"
import Products from "./home/Products";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>ListMarket</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRouterOutlet>
                    <Route path="/home/lists" render={() => <Lists />} />
                    <Route path="/home/products" render={() => <Products />} />
                    <Route path="/home/profile" render={() => <Profile />} />
                </IonRouterOutlet>
            </IonContent>
            <IonTabBar>
                <IonTabButton tab="lists" href="/home/lists">
                    <IonIcon icon={listOutline} />
                    <IonLabel>Your Lists</IonLabel>
                </IonTabButton>
                <IonTabButton tab="products" href="/home/products">
                    <IonIcon icon={grocery} />
                    <IonLabel>Your Products</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href="/home/profile">
                    <IonIcon icon={personOutline} />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonPage>
    )
}

export default Home;