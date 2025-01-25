import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface IuseGeolocationCoordsReturn {
  coords: null | GeolocationCoordinates;
  isDone: boolean;
}

function useGeolocationCoords(): IuseGeolocationCoordsReturn {
  const [coords, setCoords] = useState<null | GeolocationCoordinates>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsDone(true);
        setCoords(position.coords);
      },
      () => {
        setIsDone(true);
        toast.error("You don't have a permission to use geolocation");
      },
    );
  }, []);

  return { coords, isDone };
}

export default useGeolocationCoords;
