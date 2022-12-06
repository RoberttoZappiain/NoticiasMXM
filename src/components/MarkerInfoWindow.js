import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonLabel, IonNote, IonRow } from '@ionic/react';
import { globeOutline, heartOutline, locationOutline, navigateOutline, phonePortraitOutline } from "ionicons/icons";

export const MarkerInfoWindow = ({marker, dismiss}) => {

	return (
		<IonContent >
			<IonGrid className="ion-padding " style={{backgroundColor:"Black"}}>

				<IonRow className="ion-margin-bottom">
					<IonCol size="12">
						<IonLabel>
							<h1>{marker.title}</h1>
							<IonNote>{marker.description}</IonNote>
						</IonLabel>
					</IonCol>
				</IonRow>

				<IonRow className="ion-justify-content-start ion-align-items-center">
					<IonCol size="2">
						<IonIcon icon={locationOutline} color="primary" style={{fontSize: "1.5rem"}} />
					</IonCol>

					<IonCol size="10">{marker.address}</IonCol>
				</IonRow>

				<IonRow className="ion-justify-content-start ion-align-items-center">
					<IonCol size="2">
						<IonIcon icon={globeOutline} color="primary" style={{fontSize: "1.5rem"}} />
					</IonCol>

					<IonCol size="10">{marker.website}</IonCol>
				</IonRow>

				<IonRow className="ion-justify-content-start ion-align-items-center">
					<IonCol size="2">
						<IonIcon icon={phonePortraitOutline} color="primary" style={{fontSize: "1.5rem"}} />
					</IonCol>

					<IonCol size="10">{marker.phone}</IonCol>
				</IonRow>

				<IonRow>
					<IonCol size='12'>
					<IonButton color="danger">
						<IonIcon icon={heartOutline} />&nbsp;
						Favorito
					</IonButton>
					</IonCol>
					
				</IonRow>
			</IonGrid>
		</IonContent>
	);
}