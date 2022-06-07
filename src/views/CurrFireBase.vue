<template>
  <div class="contain-fb">
    <div class="about">
      <h1>Datos Personales</h1>

      <div class="campo">
        <strong>
          Nombre:
        </strong>
        {{ store.getNombreCompleto }}
      </div>
      <br>
      <div class="campo">
        <strong>
          Fecha de Nacimiento:
        </strong>
        {{ store.getDiaMesAnho }}
      </div>

    </div>
    <br>
    <div class="cv">
      <h1>Curriculum Vitae Prueba</h1>
      <div class="campo">
        <ul>
          <li v-for="(valor, index) in store.curriculum" :key="index">
            {{ valor.titulo }}
          </li>
        </ul>
        <strong>
        </strong>
      </div>
    </div>
    <img v-if="src.length>0" class="img_1" :src="src" alt="No hay foto">
    <input type="button" @click="cargarFoto" value="Cargar Foto">
  </div>



</template>

<script setup>
//Librerias 
import { getURL } from '@/firebase.cloud.storage';
import { ref } from 'vue';
import { useStorePerfil } from '@/store/perfil';


const src = ref("");
//Arrancamos store
const store = useStorePerfil();
const cargarFoto = async () => {
  src.value = await getURL('imagenes/Detalle_1.jpg');
}

//Cargar datos
store.setDatosPersonales();
store.setDatosCurriculum();
require("@/assets/scss/Views.scss")



</script>

<style scoped >
.contain-fb {
  margin: 20px;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  text-align: inherit;
  list-style: none;

}

.img-1 {
  object-fit: cover;
  width: 300px;

}
</style>