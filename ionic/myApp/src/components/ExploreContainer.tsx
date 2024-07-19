import './ExploreContainer.css';
import { IonIcon } from '@ionic/react';
import { alarmOutline } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const packmanSound = new Audio('/sound/pacman.wav');
  const handleClickAlarm = () => {
    console.log(`Alarme cliquée`);
    // On joue un son
    packmanSound.play();
  }
  return (
    <div className="container">
      <strong>{name} Nathan</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <p>
        <IonIcon
          onClick={() => { handleClickAlarm() }}
          icon={alarmOutline}
          size="large"
          color="success"></IonIcon>
      </p>
    </div>
  );
};

export default ExploreContainer;
