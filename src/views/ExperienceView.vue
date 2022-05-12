<template>
  <div class="container">
    <h1>Experiencia laboral</h1>
    <br>
    <p v-for="valor in data.empresas.id4" :key="valor" value="institucion">
      {{ valor }}
    </p>
    <br>
    <p v-for="valor in data.empresas.id5" :key="valor" value="institucion">
      {{ valor }}
    </p>
    <br>
    <p v-for="valor in data.empresas.id6" :key="valor" value="institucion">
      {{ valor }}
    </p>

  </div>

</template>

<script setup>
import { ref } from "vue";
let data = ref('hola');



require("@/assets/scss/Views.scss")

const obtenerDatos = async () => {
  let response = await fetch('https://raw.githubusercontent.com/ivsasa/json-curriculum/main/data.json')

  data.value = await response.json()

}
obtenerDatos()


</script>