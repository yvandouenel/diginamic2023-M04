import './ExploreContainer.css';
import { IonIcon } from '@ionic/react';
import { alarmOutline } from 'ionicons/icons';
import { useRef, useState, useEffect } from 'react';
import { Motion, RotationRate } from '@capacitor/motion';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const [accelData, setAccelData] = useState({ x: 0, y: 0, z: 0 });
  const [orientationDevice, setOrientationDevice] = useState<RotationRate | null>(null);

  const packmanSound = useRef(new Audio('/sound/pacman.wav'));
  packmanSound.current.loop = true;
  const [isPlaying, setIsplaying] = useState(false);
  useEffect(() => {
    let listener: any;

    const addListeners = async () => {
      await Motion.addListener('accel', (event) => {
        setAccelData(event.acceleration);
      });

      listener = await Motion.addListener('orientation', (event) => {
        console.log('Device orientation:', event);
        setOrientationDevice(event);
      });
    };

    addListeners();

    return () => {
      if (listener) {
        listener.remove();
      }
    };
  }, []);

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

      {accelData && accelData.x && (
        <section>
          <h2>Accelerometer Data</h2>
          <p>X: {accelData.x.toFixed(2)}</p>
          <p>Y: {accelData.y.toFixed(2)}</p>
          <p>Z: {accelData.z.toFixed(2)}</p>
        </section>)}
      <section>
        <h2>Orientation</h2>
        {orientationDevice && (
          <>
            <p>Alpha: {orientationDevice.alpha?.toFixed(2)}</p>
            <p>Beta: {orientationDevice.beta?.toFixed(2)}</p>
            <p>Gamma: {orientationDevice.gamma?.toFixed(2)}</p>
          </>
        )}
      </section>
    </div>
  );
};

export default ExploreContainer;
