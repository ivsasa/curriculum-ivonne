<template>
  <div class="container">
    <h1>Página de inicio</h1>
    <img :src="url" alt="No hay imagen">
    
    
  </div>

</template>

<script setup>
import {getURL} from '@/firebase.cloud.storage';
import { ref } from 'vue';


const url = ref("");

const cargarFoto = async () => {
url.value = await getURL();
}

cargarFoto();


</script>

<style scoped >
img{
  width: 300px;
}
</style>