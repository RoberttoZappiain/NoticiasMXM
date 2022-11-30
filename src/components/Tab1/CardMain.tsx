import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonLabel
} from '@ionic/react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
import { heartOutline, share, calendar } from 'ionicons/icons';
const CityTrends: React.FC = () => {
  return (
    <>
      <IonCol size='6'>
        <IonCard class="action-card" style={{ minHeight: "450px" }}>
          <img alt="Silhouette of mountains" src="https://www.eluniversal.com.mx/sites/default/files/styles/347x230px_bloque_hiperlocales/public/2022/11/29/barrio_tlaxcala_slp_barrios_magicos_.jpg" />
          <IonCardHeader>
            <div className="ion-text-justify">
              <h3 style={{ color: "White" }}>los primeros Barrios Mágicos de México</h3>
            </div>
            <IonCardSubtitle>SLP</IonCardSubtitle>
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
          <IonGrid >
            <IonRow className='ion-align-items-end'>
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
        <IonCard class="action-card" style={{ minHeight: "450px" }}>
          <img alt="Silhouette of mountains" src="https://www.eluniversal.com.mx/sites/default/files/styles/347x230px_bloque_hiperlocales/public/2022/11/29/897117_cenapred_reporte_popocatepetl_4_web.jpg" />
          <IonCardHeader>
            <IonCardTitle><div className="ion-text-justify">
              <h3 style={{ color: "White" }}>los volcanes Mauna Loa y Kilauea</h3>
            </div></IonCardTitle>
            <IonCardSubtitle>PUEBLA</IonCardSubtitle>
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