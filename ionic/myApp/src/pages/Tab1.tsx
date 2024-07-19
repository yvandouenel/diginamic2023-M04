import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from 'react';

const Tab1: React.FC = () => {
  const [classIonPage, setClassIonPage] = useState("");
  useIonViewDidEnter(() => {
    setClassIonPage("enter-ion-page");
  });
  useIonViewDidLeave(() => {
    setClassIonPage("leave-ion-page");
  });
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className={classIonPage}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
