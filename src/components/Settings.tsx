import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { informationCircle, settingsOutline, star } from 'ionicons/icons';
import SlIdeNotas from './tab3/SlIdeNotas';

const Settings: React.FC = () => {

    return (
        <IonGrid fixed={true}>
            <IonRow>
                <IonCol size='2'></IonCol>
                <IonCol size='8'>
                    <IonAvatar >
                        <img id="imgs" style={{}} alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                    </IonAvatar>
                    <IonItem>
                        <IonLabel className="ion-text-center">
                            <h1>nombre_completo</h1>
                            <p>@username</p>
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
                            <IonButton>Mostrar todas</IonButton>
                        </IonListHeader>
                        <SlIdeNotas />
                        <SlIdeNotas />
                        <SlIdeNotas />
                        <SlIdeNotas />
                        <SlIdeNotas />
                        <SlIdeNotas />

                    </IonList>
                </IonCol>

            </IonRow>
        </IonGrid>
    );
};

export default Settings;
