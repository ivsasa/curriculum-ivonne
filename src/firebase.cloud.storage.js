import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytes, listAll } from "@firebase/storage";


export const getURL = async (ruta = 'imagenes/marsupial.jpg') => {
    const pathReference = ref(storage, ruta);
    const url = await getDownloadURL(pathReference);
    return url;

}

export const subirFicheros = async (file,ruta='carpeta/imagen.ext') => {
    const storageRef = ref(storage, ruta);
    // 'file' comes from the Blob or File API
    const snapshot = await uploadBytes(storageRef, file);
    
}

export const listAllUrls = async (uid = 'gs//curriculum-vitae-ivss.appspot.com') => {
    // Create a reference under which you want to list
    const listRef = ref(storage, uid);
    // Find all the prefixes and items.
    const res = await listAll(listRef);
    const { items } = res;
    return await Promise.all(
    items.map((item) => getDownloadURL(item))
    );
}
