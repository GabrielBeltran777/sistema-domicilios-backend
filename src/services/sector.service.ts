import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export interface Sector {
  nombre: string;
  direccion: string;
  coordenadas: {
    lat: number;
    lng: number;
  };
  horario: string;
}

const collectionName = 'sectores';

export const createSectorService = async (sector: Sector) => {
  const docRef = await addDoc(collection(db, collectionName), sector);
  return { id: docRef.id };
};

export const getSectorsService = async () => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
