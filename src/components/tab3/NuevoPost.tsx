import { IonActionSheet, IonBackButton, IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonModal, IonNavLink, IonPage, IonRow, IonTextarea, IonTitle, IonToggle, IonToolbar, useIonViewWillEnter, useIonToast } from '@ionic/react';
import { camera, trash } from 'ionicons/icons';
import { useEffect, useRef, useState } from 'react';
import { usePhotoGallery, UserPhoto } from '../../hooks/usePhotoGallery';
import { Camera, CameraResultType } from '@capacitor/camera';

import { firebaseConfig } from '../../database/config'
import firebase from 'firebase/app'; // npm i firebase
import 'firebase/firebase-firestore';
import { equipo } from '../../modelo/equipo'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}




function NuevoPost() {


    const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Nota publicada correctamente!',
      duration: 3500,
      position: position
    });
  };
    const [listaEquipo, setListaEquipo] = useState<equipo[]>([]);
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [titulos, setTitulos] = useState('');
    const [mensaje, setMensaje] = useState(false);
    const [bandera, setBandera] = useState(true);


    const listar = async () => {
        try {
            let lista: equipo[] = []
            const res = await firebase.firestore().collection('equipo').get();
            res.forEach((doc) => {
                let obj = {
                    id: doc.id,
                    nombre: doc.data().nombre,
                    titulos: doc.data().titulos
                };
                lista.push(obj)

            });
            setListaEquipo(lista)
        } catch (error) { }
    }

    const crear = async () => {
        try {
            if (bandera) {
                await firebase.firestore().collection('equipo').add(
                    { nombre, titulos });

            } else {
                await firebase.firestore().collection('equipo').doc(id).set(
                    { nombre, titulos });
                setBandera(true);
            }

        } catch (error) { }
        setId('');
        setNombre('');
        setTitulos('');
        setMensaje(true);
        listar();
    }


    const eliminar = async (id: string) => {
        try {
            console.log(id)
            await firebase.firestore().collection('equipo').doc(id).delete();
            listar();
        } catch (error) { }
    }

    const editar = (id: string, nombre: string, titulo: string) => {
        setId(id);
        setNombre(nombre);
        setTitulos(titulo);
        setBandera(false);
    }

    useIonViewWillEnter(() => {
        listar();
    })
    const { deletePhoto, photos, takePhoto } = usePhotoGallery();
    const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(undefined);

    const [canDismiss, setCanDismiss] = useState(false);
    const [presentingElement, setPresentingElement] = useState<HTMLElement | undefined>(undefined);

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    function dismiss() {
        modal.current?.dismiss();
    }

    return (

        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Nuevo Post</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <div className="ion-margin-top">
                    <IonGrid>
                        <IonRow>
                            {photos.map((photo, index) => (
                                <IonCol size="12" key={index} style={{ backgroundColor: "red" }}>
                                    <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            <IonCol size='12'>

                                <IonActionSheet
                                    isOpen={!!photoToDelete}
                                    buttons={[{
                                        text: 'Delete',
                                        role: 'destructive',
                                        icon: trash,
                                        handler: () => {
                                            if (photoToDelete) {
                                                deletePhoto(photoToDelete);
                                                setPhotoToDelete(undefined);
                                            }
                                        }
                                    }, {
                                        text: 'Cancel',
                                        role: 'cancel'
                                    }]}
                                    onDidDismiss={() => setPhotoToDelete(undefined)}
                                />

                                <IonItem>
                                    <IonLabel position="floating">Titulo</IonLabel>
                                    <IonInput value={nombre}
                                        placeholder=""
                                        onIonChange={e => setNombre(e.detail.value!)}
                                    ></IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonTextarea
                                        value={titulos}
                                        placeholder="Descripcion"
                                        autoGrow={true}
                                        onIonChange={e => setTitulos(e.detail.value!)}
                                    ></IonTextarea>
                                </IonItem>
                                <IonRow>
                                    <IonCol style={{ marginTop: "10px" }} size='4'>
                                        <IonLabel  >Fecha post</IonLabel>
                                    </IonCol>
                                    <IonCol size='8' style={{ marginTop: "10px" }}>
                                        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>                                </IonCol>
                                </IonRow>
                                <IonModal keepContentsMounted={true}>
                                    <IonDatetime id="datetime"></IonDatetime>
                                </IonModal>
                            </IonCol>
                            <IonCol size='6' color='primary'>

                                    <IonFabButton style={{ marginLeft: "50px" }} color={"light"} onClick={() => takePhoto()}>
                                        <IonIcon icon={camera}></IonIcon>
                                    </IonFabButton>
                            </IonCol>
                            <IonCol size='6' >
                                <IonButton expand="block" color="light" style={{ marginRight: "40px" }} size="default" onClick={() => presentToast('bottom')}>Publicar</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonFab vertical="center" horizontal="start" slot="fixed">

                    </IonFab>
                </div>


            </IonContent>
        </>
    );
}

export default NuevoPost;

