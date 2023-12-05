import React from 'react';
import { IonButton } from '@ionic/react';
import { Toast } from '@capacitor/toast';

const ToastComponent: React.FC = () => {
  const showToast = async () => {
    await Toast.show({
      text: 'En vla du toast',
      duration: 'short',
      position: 'top',
    });
  };

  return (
    <IonButton onClick={showToast}>Show Toast</IonButton>
  );
};

export default ToastComponent;