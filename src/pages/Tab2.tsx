import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, useIonViewWillEnter } from '@ionic/react';
import { map } from 'ionicons/icons';
import { useRef, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { GoogleMap } from '@capacitor/google-maps';
import { markers } from '../data';

const Tab2: React.FC = () => {

  const Key = "AIzaSyCcAhcSs97hcLnvnOmN6aqeoMffALAqS-s"
  let newMap;
  const mapRef = useRef(null);

  const [mapConfig, setMapConfig] = useState({
    zoom: 5,
    center: {
      lat: markers[0].lat,
      lng: markers[0].lng
    },
    mapId: '4a6551b8f2c8be12',
  })

  const createMap = async () => {
    if (!mapRef.current) return;
    newMap = await GoogleMap.create({
      id: "4a6551b8f2c8be12",
      element: mapRef.current,
      apiKey: Key,
      config: mapConfig
    });  }

    useIonViewWillEnter(() => createMap());
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mapa</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mapa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol size="12">
            <capacitor-google-map ref={mapRef} id="map">
              
              </capacitor-google-map> 
          </IonCol>
          </IonRow>
        {/* <ExploreContainer name="Tab 2 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
