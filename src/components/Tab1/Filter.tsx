import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonText, useIonPicker} from '@ionic/react';
import { IonCol,  IonRow } from '@ionic/react';
import { IonButton } from '@ionic/react';

const Filter: React.FC = () => {
    const [present] = useIonPicker();

    const openPicker = async () => {
      present({
        columns: [
          {
            name: 'filter_name',
            options: [
              {
                text: 'Guadalajara',
                value: 'Guadalajara',
              },
              {
                text: 'CDMX',
                value: 'CDMX',
              },
              {
                text: 'Monterrey',
                value: 'Monterrey',
              },
              {
                text: 'Nayarit',
                value: 'Nayarit#',
              },
            ],
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Confirm',
            handler: (value) => {
              window.alert(`You selected: ${value.languages.value}`);
            },
          },
        ],
      });
    };
    return ( 
        <IonCol size='12'>
        <IonRow className='ion-justify-content-between'>
            <IonCol size='8'>
              <div className="ion-text-start">
                <h3>filtrar:</h3>
              </div>
            </IonCol>
            <IonCol size='4'>
              <div  style={{marginTop:"15px"}}>
              <IonButton color="light" size="small" onClick={openPicker}>Ciudad</IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonCol>
    );
};

export default Filter;