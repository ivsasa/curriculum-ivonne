<template>
  <!-- Imagen  que aparece al iniciar la pagina del storage -->

  <div class="container">
    <h1>Página de inicio</h1>
    <img :src="url" alt="No hay imagen">
    
    
  </div>

  <!-- Utilizar componente examinar -->

  <div>
    <h1 class="container" >Cargar imagen</h1>
    <TheUploader @emitirFichero="gestionarFichero"></TheUploader>
  </div>

</template>



<script setup>
//Imagen  que aparece al iniciar la pagina del storage
import TheUploader from '../components/TheUploader'
import { useStorePerfil } from '@/store/perfil';
import {getURL} from '@/firebase.cloud.storage';
import { ref } from 'vue';



const url = ref("");

const cargarFoto = async () => {
url.value = await getURL();
}

cargarFoto();
// Utilizar componente examinar
const store = useStorePerfil();
const gestionarFichero = imagen =>{
  //console.log(typeof imagen);
    if(imagen){
     store.subirFoto(imagen)
    }
}


</script>

<style scoped >
img{
  width: 300px;
}
</style>