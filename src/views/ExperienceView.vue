<template>
  <div class="container" v-if="loading">
    <h1>Experiencia laboral</h1>
    <br>
    <p>
      <b>Nombre:</b> {{ data.empresas.id4.nombre }} <br>
      <b>Ciudad:</b> {{ data.empresas.id4.ciudad }} <br>
      <b>País:</b> {{ data.empresas.id4.pais }} <br>
      <b>Años:</b> {{ data.empresas.id4.años }} <br>
      <b>Puesto:</b> {{ data.empresas.id4.puesto }} <br>
    </p>
    <br>
    <p>
      <b>Nombre:</b> {{ data.empresas.id5.nombre }} <br>
      <b>Ciudad:</b> {{ data.empresas.id5.ciudad }} <br>
      <b>País:</b> {{ data.empresas.id5.pais }} <br>
      <b>Años:</b> {{ data.empresas.id5.años }} <br>
      <b>Puesto:</b> {{ data.empresas.id5.puesto }} <br>
    </p>
    <br>
    <p>
      <b>Nombre:</b> {{ data.empresas.id6.nombre }} <br>
      <b>Ciudad:</b> {{ data.empresas.id6.ciudad }} <br>
      <b>País:</b> {{ data.empresas.id6.pais }} <br>
      <b>Años:</b> {{ data.empresas.id6.años }} <br>
      <b>Puesto:</b> {{ data.empresas.id6.puesto }} <br>
    </p>
    
  </div>

</template>

<script setup>
import { ref } from "vue";
let data = ref();
let loading = ref(false);

require("@/assets/scss/Views.scss")

const obtenerDatos = async () => {
  try {
    let response = await fetch('https://raw.githubusercontent.com/ivsasa/json-curriculum/main/data.json')

    data.value = await response.json()
  }
  catch (error) { console.log(error) }
  loading.value = true
}
obtenerDatos()

</script>