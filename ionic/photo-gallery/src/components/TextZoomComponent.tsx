import React, { useEffect, useState } from 'react';
import { TextZoom } from '@capacitor/text-zoom';

const TextZoomComponent: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    const getTextZoom = async () => {
      const { value } = await TextZoom.get();
      setZoomLevel(value);
    };

    getTextZoom();
  }, []);

  const setTextZoom = async (zoomLevel: number) => {
    await TextZoom.set({ value: zoomLevel });
    setZoomLevel(zoomLevel);
  };

  return (
    <div>
      <div>Current zoom level: {zoomLevel}</div>
      <button onClick={() => setTextZoom(1.2)}>Increase Text Zoom</button>
      <button onClick={() => setTextZoom(1)}>Reset Text Zoom</button>
    </div>
  );
};

export default TextZoomComponent;