import './ExploreContainer.css';
import {IonGrid, IonRow } from '@ionic/react';
import CityTrends from './Tab1/CityTends'
import NotesTrends from './Tab1/NotesTrends';
import Filter from './Tab1/Filter';
import CardMain from './Tab1/CardMain'

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  return (
    <div className="container ">
      <IonGrid fixed={true}>
        <CityTrends/>
        <IonRow>
          <NotesTrends/>
          <Filter/>
          <CardMain/>          
        </IonRow>
      </IonGrid>
    </div>

  );
};

export default ExploreContainer;
