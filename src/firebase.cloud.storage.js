import { storage } from './firebase';
import { ref, getDownloadURL } from "@firebase/storage";


export const getURL = async (ruta = 'imagenes/marsupial.jpg') => {
    const pathReference = ref(storage, ruta);
    const url = await getDownloadURL(pathReference);
    return url;

}

