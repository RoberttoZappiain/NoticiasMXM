
import './ExploreContainer.css';
import { IonGrid, IonInput, IonPage, IonRow } from '@ionic/react';
import CityTrends from './Tab1/CityTends'
import NotesTrends from './Tab1/NotesTrends';
import Filter from './Tab1/Filter';
import CardMain from './Tab1/CardMain'
const ExploreContainer: React.FC = () => {
    return (
        <>
            <div className="container ">
                <IonGrid fixed={true}>
                    <CityTrends />
                    <IonRow>
                        <NotesTrends />
                        <Filter />
                        <CardMain />

                    </IonRow>
                </IonGrid>
            </div>

            <IonPage>

                {/* //
        <IonToast
           isOpen={mensaje}
           onDidDismiss={() => setMensaje(false)}
           message="equipo guardado"
           duration={500}
          />
            <IonHeader>
                <IonToolbar color="warning">
                    <IonTitle>CRUD IONIC REACT FIREBASE</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Equipo</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard>
                    <IonItem>
                        <IonInput value={nombre}
                            placeholder="Nombre Equipo"
                            onIonChange={ e => setNombre(e.detail.value!) }
                        ></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput value={titulos}
                            placeholder="Cantidad Titulos"
                            onIonChange={ e => setTitulos(e.detail.value!) }
                        ></IonInput>
                    </IonItem>
                <IonButton color="success" expand="block"
                    onClick={() => crear() }>
                        <IonIcon icon={addOutline}>
                        </IonIcon>{bandera?'Equipo':'Editar'}</IonButton>
                </IonCard>
                <IonList> {
                    listaEquipo.map(equipo => (
                        <IonCard key={equipo.id} >
                            <IonCardHeader>
                                <IonCardTitle>Nombre:{
                                    equipo.nombre
                                }</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Titulos: {equipo.titulos} 
                                <IonButton color="danger" expand="block"
                               onClick={() => eliminar(''+equipo.id)}>
                             <IonIcon icon={trashBinOutline}></IonIcon>
                               Eliminar</IonButton>  
                        <IonButton color="tertiary" expand="block"
                         onClick={
                    () => editar(''+equipo.id,''+equipo.nombre,''+equipo.titulos)}>
                             <IonIcon icon={pencil}></IonIcon>Editar</IonButton>   
                            </IonCardContent>
                             
                        </IonCard>
                    )) }
                 </IonList>
            </IonContent>
             */}

            </IonPage>
        </>
    );
};
export default ExploreContainer;