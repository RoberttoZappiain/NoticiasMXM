import { IonCol, IonImg, IonText } from '@ionic/react';
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
        <h3>Novedades</h3>
      </div>
      <IonSlides id='slides' options={slideOpts}>
      <IonSlide id='slides1'>
          <div className='Bg1 '>
            <IonText color="dark" >
              <h6 className='centered'>Ultima hora</h6>
            </IonText>
          </div>
          <IonImg id='slidesimg' src="https://www.debate.com.mx/__export/1633625080439/sites/debate/img/2021/10/07/cdmx.jpeg_242310155.jpeg" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
        </IonSlide>
        <IonSlide id='slides1'>
          <div className='Bg1 '>
            <IonText color="dark" >
              <h6 className='centered'>Ultima hora</h6>
            </IonText>
          </div>
          <IonImg id='slidesimg' src="https://alma-de-chiapas.com/wp-content/uploads/2021/08/Guadalajara-1-1536x862.jpeg" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
        </IonSlide>
        <IonSlide id='slides1'>
          <div className='Bg1 '>
            <IonText color="dark" >
              <h6 className='centered'>Ultima hora</h6>
            </IonText>
          </div>
          <IonImg id='slidesimg' src="https://www.eleconomista.com.mx/__export/1624501105662/sites/eleconomista/img/2021/06/23/monterrey_2.jpg_554688468.jpg" alt="The Wisconsin State Capitol building in Madison, WI at night"></IonImg>
        </IonSlide>
      </IonSlides>
    </IonCol>
  );
};

export default NotesTrends;