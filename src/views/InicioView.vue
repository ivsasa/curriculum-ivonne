<template>
  <!-- Imagen  que aparece al iniciar la pagina del storage -->

  <div class="container">
    <h1>Página de inicio</h1>
    <img :src="url" alt="No hay imagen">


  </div>

  <!-- Utilizar componente examinar -->

  <div>
    <h1 class="container">Cargar imagen</h1>
    <TheUploader @emitirFichero="gestionarFichero"></TheUploader> <br>

    <strong>{{error}}</strong>
    <img 
    
    v-for="(ruta,index) in rutas" :key="index" 
    :src="ruta" alt="">
  </div>

</template>



<script setup>
//Imagen  que aparece al iniciar la pagina del storage
import TheUploader from '../components/TheUploader'
import { useStorePerfil } from '@/store/perfil';
import { getURL, listAllUrls } from '@/firebase.cloud.storage';
import { ref } from 'vue';




const url = ref("");

const cargarFoto = async () => {
  url.value = await getURL();
}

cargarFoto();
// Utilizar componente examinar
const store = useStorePerfil();
const error = ref('');
const rutas = ref([]);
const gestionarFichero = async (imagen) => {
  try {
    error.value = '';
    await store.subirFoto(imagen);
  } catch (e) {
    error.value = e.message;

  }
  //console.log(typeof imagen);

}
const cargarFotos = async () =>{
  rutas.value = await listAllUrls('carpeta');
}
cargarFotos();

</script>

<style scoped >
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>