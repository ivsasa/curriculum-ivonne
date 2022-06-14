<template>
  <div class="contain-fb">
    <div class="header">
      <div>
        foto
      </div>
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

    </div>

    <div class="cfb-main">
      <div class="cfb-ficha">
        <h1>Cursos</h1>
        <div class="campo">
          <ul>
            <li v-for="(valor, index) in store.cursos" :key="index">
              {{ valor.nombre }} {{ valor.periodo }}
            </li>
          </ul>
          <strong>
          </strong>
        </div>
      </div>
      <div class="cfbficha">
        <h1>Educación</h1>
        <ul>
          <li v-for="(valor, index) in store.instituciones" :key="index">
            <span>{{ valor.nombre }}</span>
            <span>{{ valor.periodo }}</span>
          </li>
        </ul>
      </div>
      <div class="cfb-ficha">
        <h1>Experiencia laboral</h1>
        <ul>
          <li v-for="(valor, index) in store.empresas" :key="index">
            {{ valor.nombre }} {{ valor.periodo }}
          </li>
        </ul>
      </div>
    </div>

    <img v-if="src.length > 0" class="img_1" :src="src" alt="No hay foto">
    <input type="button" @click="cargarFoto" value="Cargar Foto">
  </div>



</template>

<script setup>
//Librerias 
import { getURL } from '@/firebase.cloud.storage';
import { ref } from 'vue';
import { useStorePerfil } from '@/store/perfil';

//Arrancamos store
const store = useStorePerfil();



//Cargar datos personales

store.setDatosPersonales();

//Cargar datos curriculares
store.setDatosCurricular();

//Funcion para cargar foto con un boton
const src = ref("");

const cargarFoto = async () => {
  src.value = await getURL('big-data.jpg');
}

//Cargar SCSS
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

.cfb-main{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

/* .cfb-ficha{
  display: flex;
} */
</style>