import { IonButtons, IonMenu, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonButton, IonIcon } from '@ionic/react';
import { menu, star } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false}></IonMenuButton>
        </IonButtons>
        <IonTitle>title var</IonTitle>
      </IonToolbar>        
      </IonHeader>
      <IonContent fullscreen={true} className="ion-padding">
        <ExploreContainer name="Noticias" />
      </IonContent>
    </IonPage >
  );
};

export default Tab1;
