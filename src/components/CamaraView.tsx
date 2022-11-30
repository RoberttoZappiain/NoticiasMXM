import React, { useState } from 'react';
import { IonContent, IonHeader, useIonViewWillEnter, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonItem, IonLabel, IonInput, IonTextarea, IonDatetimeButton, IonModal, IonDatetime, IonButton } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

import { firebaseConfig } from '../database/config'
import firebase from 'firebase/app'; // npm i firebase
import 'firebase/firebase-firestore';
import { equipo } from '../modelo/equipo'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const CamaraView: React.FC = () => {
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Nueva nota</IonTitle>
          </IonToolbar>
        </IonHeader>
        

      </IonContent>
    </IonPage>
  );
};

export default CamaraView;
