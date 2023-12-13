import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonHeader, IonProgressBar, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import React, { Suspense, useState } from 'react';
import appContext, { Profile, List as ListType, ListState } from './context/appContext';
import List from './pages/List';

setupIonicReact();

const App: React.FC = () => {
  const Home = React.lazy(() => import('./pages/Home'))

  const [profile, setProfile] = useState<Profile>()
  const [lists, setLists] = useState<ListType[]>([
    {
      id: '123123',
      name: 'Lista de la compra de casa'
    },
    {
      id: '123124',
      name: 'Compra comida de navidad'
    }
  ])
  const [currentListState, setCurrentListState] = useState<ListState>({
    products: [
      {
        id: 'adsw1',
        name: 'Merluza 500g',
        category: "fish"
      },
      {
        id: 'ccsw1',
        name: 'Carne picada ternera 500g',
        category: "grocery"
      },
      {
        id: 'adsw2',
        name: 'Naranjas',
        category: "fruit"
      },
      {
        id: 'bdsw2',
        name: 'Zanahorias',
        category: "veggies"
      },
      {
        id: 'baaw2',
        name: 'Pack bombillas',
        category: "household"
      },
    ]
  })

  const loadingPage = (
    <IonHeader>
      <IonToolbar>
        <IonTitle>ListMarket</IonTitle>
        <IonProgressBar type="indeterminate"></IonProgressBar>
      </IonToolbar>
    </IonHeader>
  )

  return (
    <appContext.Provider
      value={{
        profile,
        lists,
        currentListState
      }}
    >
      <IonApp>
        <IonReactRouter>
          <Suspense fallback={loadingPage}>
            <IonRouterOutlet>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Redirect to="/home/lists" />
              </Route>
              <Route path="/list">
                <List />
              </Route>
            </IonRouterOutlet>
          </Suspense>
        </IonReactRouter>
      </IonApp>
    </appContext.Provider>
  )
}

export default App;
