import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, useIonViewWillEnter, IonSearchbar, IonButton, IonButtons, IonIcon, IonMenuButton, IonChip, IonAvatar, IonLabel, IonText, IonModal, IonList, IonItem, IonImg } from '@ionic/react';
import { closeCircle, mailOpen, map, personCircle } from 'ionicons/icons';
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
    zoom: 7,
    center: {
      lat: markers[0].lat,
      lng: markers[0].lng
    },
    mapId: '4a6551b8f2c8be12',
    fullscreenControl: false,
    disableDefaultUI: true,
  })

  const createMap = async () => {
    if (!mapRef.current) return;
    newMap = await GoogleMap.create({
      id: "4a6551b8f2c8be12",
      element: mapRef.current,
      apiKey: Key,
      config: mapConfig
    });
  }


  const modal = useRef<HTMLIonModalElement>(null);


  useIonViewWillEnter(() => createMap());
  return (
    <IonPage>
      <IonContent fullscreen={true} className="">
        <capacitor-google-map ref={mapRef} id="map">

        </capacitor-google-map>

        {/* <ExploreContainer name="Tab 2 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
