import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from "@ionic/react";

interface ContainerProps {
    title: string;
    date: String;
  }

const SlIdeNotas: React.FC<ContainerProps> = ({title, date}) => {
    return (
        <IonItemSliding>
        <IonItem>
            <IonLabel class="ion-text-wrap">
            <h2 style={{marginTop:"20px"}}>{title} </h2>
            <p>fecha: {date}</p>
            </IonLabel>
        </IonItem>
        <IonItemOptions>
            <IonItemOption color="danger">Eliminar</IonItemOption>
        </IonItemOptions>
    </IonItemSliding>
    );
  };
  
  export default SlIdeNotas;