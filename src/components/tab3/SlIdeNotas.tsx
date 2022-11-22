import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from "@ionic/react";

const SlIdeNotas: React.FC = () => {
    return (
        <IonItemSliding>
        <IonItem>
            <IonLabel class="ion-text-wrap">
            <h2 style={{marginTop:"20px"}}>titulo_nota </h2>
            <p>fecha: 20/20/20</p>
            </IonLabel>
        </IonItem>
        <IonItemOptions>
            <IonItemOption color="danger">Eliminar</IonItemOption>
        </IonItemOptions>
    </IonItemSliding>
    );
  };
  
  export default SlIdeNotas;