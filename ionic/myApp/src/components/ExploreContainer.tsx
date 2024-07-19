import './ExploreContainer.css';
import { IonIcon } from '@ionic/react';
import { alarmOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const packmanSound = useRef(new Audio('/sound/pacman.wav'));
  packmanSound.current.loop = true;
  const [isPlaying, setIsplaying] = useState(false);

  const handleClickAlarm = () => {
    console.log(`Alarme cliquée`);
    if (isPlaying) {
      setIsplaying(false);
      // On arrête le son
      packmanSound.current.pause();
    } else {
      setIsplaying(true);
      // On joue un son
      packmanSound.current.play();
    }



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
          color={isPlaying ? "danger" : "success"}></IonIcon>
      </p>
    </div>
  );
};

export default ExploreContainer;
