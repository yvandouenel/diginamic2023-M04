import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewDidLeave } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { useState } from 'react';

const Tab3: React.FC = () => {
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
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className={classIonPage}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" >Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
