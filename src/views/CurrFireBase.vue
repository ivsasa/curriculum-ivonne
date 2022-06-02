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
  </div>
</template>

<script setup>
//Librerias 
import { useStorePerfil } from '@/store/perfil';
//Arrancamos store
const store = useStorePerfil();

//Cargar datos
store.setDatosPersonales();
store.setDatosCurriculum();
require("@/assets/scss/Views.scss")

</script>

<style>

.contain-fb{
  margin: 20px;
}

ul{
  margin: 0;
  padding: 0;
}

li {
  text-align: inherit;
}
</style>