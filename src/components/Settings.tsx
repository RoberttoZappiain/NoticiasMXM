import { IonActionSheet, IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonModal, IonNav, IonNavLink, IonPage, IonRow, IonTextarea, IonTitle, IonToggle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { camera, informationCircle, settingsOutline, star, trash } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import SlIdeNotas from './tab3/SlIdeNotas';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

import { firebaseConfig } from '../database/config'
import firebase from 'firebase/app'; // npm i firebase
import 'firebase/firebase-firestore';
import { equipo } from '../modelo/equipo'
import NuevoPost from './tab3/NuevoPost';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const Settings: React.FC = () => {

    return (
        <>

            <IonGrid fixed={true}>
                <IonRow>
                    <IonCol size='2'></IonCol>
                    <IonCol size='8'>
                        <IonAvatar >
                            <img id="imgs" style={{}} alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </IonAvatar>
                        <IonItem>
                            <IonLabel className="ion-text-center">
                                <h1>Roberto Flores</h1>
                                <p>@elrobertt</p>
                            </IonLabel>
                        </IonItem>
                    </IonCol>
                    <IonCol size='2'>
                        <IonButton fill="clear" size="small" color="dark">
                            <IonIcon slot="icon-only" icon={settingsOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size='12'>
                        <IonList>
                            <IonListHeader >
                                <IonLabel className="ion-text-start">Notas Publicadas</IonLabel>

                                <IonNavLink routerDirection="forward" component={() => <NuevoPost />}>
                                    <IonButton style={{paddingTop:"20px"}} expand="block" fill="clear"> Nueva Nota</IonButton>
                                </IonNavLink>

                            </IonListHeader>
                            <SlIdeNotas title= "los volcanes Mauna Loa y Kilauea" date="5/6/2022"/>
                            <SlIdeNotas title= "los volcanes Mauna Loa y Kilauea" date="22/6/2022"/>
                            <SlIdeNotas title= "los volcanes Mauna Loa y Kilauea" date="17/9/2022"/>
                            <SlIdeNotas title= "los volcanes Mauna Loa y Kilauea" date="5/7/2022"/>
                            <SlIdeNotas title= "los volcanes Mauna Loa y Kilauea" date="19/4/2022"/>
                            <SlIdeNotas title= "los volcanes Mauna Loa y Kilauea" date="15/6/2022"/>

                        </IonList>
                    </IonCol>

                </IonRow>
            </IonGrid>
        </>
    );
};

export default Settings;
