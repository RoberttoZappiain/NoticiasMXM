import { IonCol } from '@ionic/react';
import { IonSlides, IonSlide } from '@ionic/react';

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
const NotesTrends: React.FC = () => {
    return ( 
        <IonCol size='12'>
            <div className="ion-text-start">
              <h3>title var</h3>
            </div>
            <IonSlides id='slides' options={slideOpts}>
              <IonSlide id='slides1'>
                <h1 >Slide 1</h1>
              </IonSlide>
              <IonSlide id='slides1'>
                <h1>Slide 2</h1>
              </IonSlide>
              <IonSlide id='slides1'>
                <h1>Slide 3</h1>
              </IonSlide>
            </IonSlides>
          </IonCol>
    );
};

export default NotesTrends;