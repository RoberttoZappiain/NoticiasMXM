import { IonCol, IonRow, IonChip } from '@ionic/react';
import { IonSlides, IonSlide } from '@ionic/react';

interface ContainerProps {
    name: string;
}

const slideOpts = {
    slidesPerView: 10,
    freeMode: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
};
const CityTrends: React.FC= () => {
    return (
        <IonRow>
            <IonCol size='12'>
                <div className="ion-text-start">
                    <h3>title var</h3>
                </div>
                <IonSlides id='slides' options={slideOpts}>
                    <IonSlide id='slides2'>
                        <IonChip color="dark">city_name</IonChip>
                    </IonSlide>
                    <IonSlide id='slides2'>
                    <IonChip color="dark">city_name</IonChip>
                    </IonSlide>
                    <IonSlide id='slides2'>
                    <IonChip color="dark">city_name</IonChip>
                    </IonSlide>
                    <IonSlide id='slides2'>
                    <IonChip color="dark">city_name</IonChip>
                    </IonSlide>
                    <IonSlide id='slides2'>
                    <IonChip color="dark">city_name</IonChip>
                    </IonSlide>
                </IonSlides>
            </IonCol>

        </IonRow>
    );
};

export default CityTrends;

