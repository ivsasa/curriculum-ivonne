<template>
  <!-- Imagen  que aparece al iniciar la pagina del storage -->

  <div class="encabezado-inicio" >
    <img :src="url" alt="No hay imagen" class="img-encabezado">
  </div>

  <div class="inicio-gallery" >
    <h1>Acerca de</h1>

    <strong>{{ error }}</strong>
   
      <img class="gallery" v-for="(ruta, index) in rutas" :key="index" :src="ruta" alt="">
      
  </div>
  <TheUploader @emitirFichero="gestionarFichero"></TheUploader>
</template>



<script setup>
//Imagen  que aparece al iniciar la pagina del storage
import TheUploader from '../components/TheUploader'
import { useStorePerfil } from '@/store/perfil';
import { getURL, listAllUrls } from '@/firebase.cloud.storage';
import { ref } from 'vue';


//Componente para cargar foto ya subida

const url = ref("");

const cargarFoto = async () => {
  url.value = await getURL();
}

cargarFoto();


//Utilizar componente para subir foto
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
const cargarFotos = async () => {
  rutas.value = await listAllUrls('inicio');
  rutas.value.forEach(element => console.log (element))
  
}

cargarFotos();

</script>

<style scoped >

/* Encabezado de la pagina de inicio*/

.encabezado-inicio{
  display: flex;
  
  
  
}
.img-encabezado{
  display: block;
  margin: auto;
  
}



/* Galeria de post de la pagina de inicio */
.inicio-gallery{
  margin:auto;
}
.gallery {
  
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>