import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonNote, IonRow } from '@ionic/react';
import { globeOutline, heartOutline, locationOutline, navigateOutline, phonePortraitOutline } from "ionicons/icons";

export const MarkerInfoWindow = ({marker, dismiss}) => {

	return (
		<IonContent style={{backgroundColor:"Black"}}>
			<IonGrid className="ion-padding" style={{backgroundColor:"Black"}}>

				<IonRow className="ion-margin-bottom">
					<IonCol size="12">
					<img alt="Silhouette of mountains" style={{height:"150px"}} src="https://www.eluniversal.com.mx/sites/default/files/styles/347x230px_bloque_hiperlocales/public/2022/11/29/897117_cenapred_reporte_popocatepetl_4_web.jpg" />

						<IonLabel>
							<h1>los volcanes Mauna Loa y Kilauea</h1>
							<IonNote>PUEBLA</IonNote>
						</IonLabel>
					</IonCol>
				</IonRow>

				<IonRow className="ion-justify-content-start ion-align-items-center">
					<IonCol size="2">
						<IonIcon icon={locationOutline} color="primary" style={{fontSize: "1.5rem"}} />
					</IonCol>

					<IonCol size="10">{marker.address}</IonCol>
				</IonRow>

				

				<IonRow className="ion-justify-content-center ion-align-items-center">
					
					<IonButton color="danger">
						<IonIcon slot="icon-only" icon={heartOutline} />&nbsp;
						
					</IonButton>
					
				</IonRow>
			</IonGrid>
		</IonContent>
	);
}