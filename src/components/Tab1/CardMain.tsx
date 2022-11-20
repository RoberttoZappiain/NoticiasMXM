import { 
  IonCard, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonChip, 
  IonLabel } from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
import { heartOutline, share,  calendar } from 'ionicons/icons';
const CityTrends: React.FC = () => {
    return (
        <>
        <IonCol size='6'>         
            <IonCard class="action-card">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <IonCardHeader>
                <IonCardTitle>titulo__nota</IonCardTitle>
                <div style={{marginTop:"20px"}}></div>
                <IonCardSubtitle>city_name</IonCardSubtitle>
              </IonCardHeader>
              <IonRow className="ion-justify-content-start">
                {/* <IonCol size='6'>
                  <IonChip color="danger">
                    <IonIcon icon={skull} color="danger"></IonIcon>
                    <IonLabel>Victimas</IonLabel>
                  </IonChip>
                </IonCol> */}
                <IonCol size='6'>
                  <IonChip color="dark" disabled={true}>
                    <IonIcon icon={calendar} color="dark"></IonIcon>
                    <IonLabel>22/10/2022</IonLabel>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonGrid>
                <IonRow>
                  <IonCol size='12'>
                    <IonButton color="dark" size="small" expand="block" fill="solid">Ver mas</IonButton>
                  </IonCol>
                  <IonCol >
                    <IonButton color="danger" size="small" fill="clear">
                      <IonIcon color="danger" slot="icon-only" icon={heartOutline}></IonIcon>
                    </IonButton>
                    <IonButton size="small" fill="clear">
                      <IonIcon slot="icon-only" icon={share}></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          </IonCol>
          <IonCol size='6'>         
            <IonCard class="action-card">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <IonCardHeader>
                <IonCardTitle>titulo__nota</IonCardTitle>
                <div style={{marginTop:"20px"}}></div>
                <IonCardSubtitle>city_name</IonCardSubtitle>
              </IonCardHeader>
              <IonRow className="ion-justify-content-start">
                {/* <IonCol size='6'>
                  <IonChip color="danger">
                    <IonIcon icon={skull} color="danger"></IonIcon>
                    <IonLabel>Victimas</IonLabel>
                  </IonChip>
                </IonCol> */}
                <IonCol size='6'>
                  <IonChip color="dark" disabled={true}>
                    <IonIcon icon={calendar} color="dark"></IonIcon>
                    <IonLabel>22/10/2022</IonLabel>
                  </IonChip>
                </IonCol>
              </IonRow>
              <IonGrid>
                <IonRow>
                  <IonCol size='12'>
                    <IonButton color="dark" size="small" expand="block" fill="solid">Ver mas</IonButton>
                  </IonCol>
                  <IonCol >
                    <IonButton color="danger" size="small" fill="clear">
                      <IonIcon color="danger" slot="icon-only" icon={heartOutline}></IonIcon>
                    </IonButton>
                    <IonButton size="small" fill="clear">
                      <IonIcon slot="icon-only" icon={share}></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          </IonCol>
        </>
        
     );
};

export default CityTrends;