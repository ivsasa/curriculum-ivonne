<template>
  <div class="encabezado">

    <div class="foto">
      <img alt="Foto" src="http://placekitten.com/600/700">

    </div>
    <div class="descripcion">
      <h1>Descripción</h1>
      <ul class="contein-datos">
        <li>Nombre: Ivonne Sánchez Sánchez</li>
        <li>Télefono: 603351517</li>
        <li>Email: ivonne9410@hotmail.com</li>
      </ul>
    </div>
  </div>
  <div class="desarrollo">
    <div class="cursos">
      <h1>Cursos</h1>
      <br>
      <p v-for="valor in data.cursos.id7" :key="valor" value="institucion">
        {{ valor }}
      </p>
      <br>
      <p v-for="valor in data.cursos.id8" :key="valor" value="institucion">
        {{ valor }}
      </p>
      <br>
      <p v-for="valor in data.cursos.id9" :key="valor" value="institucion">
        {{ valor }}
      </p>
<br>
      <p v-for="valor in data.cursos.id10" :key="valor" value="institucion">
        {{ valor }}
      </p>
<br>
      <p v-for="valor in data.cursos.id11" :key="valor" value="institucion">
        {{ valor }}
      </p>

    </div>
    <div class="estudios">
      <h1>Estudios</h1>
      <br>
      <p v-for="valor in data.instituciones.id1" :key="valor" value="institucion">
        {{ valor }}
      </p>
      <br>
      <p v-for="valor in data.instituciones.id2" :key="valor" value="institucion">
        {{ valor }}
      </p>
      <br>
      <p v-for="valor in data.instituciones.id3" :key="valor" value="institucion">
        {{ valor }}
      </p>

    </div>

  </div>

</template>

<script setup >
// import { response } from "express";
import { ref } from "vue";
let data = ref('hola');

require("@/assets/scss/HomeView.scss")

const obtenerDatos = async () => {
  let response = await fetch('https://raw.githubusercontent.com/ivsasa/json-curriculum/main/data.json')

  data.value = await response.json()

}
obtenerDatos()

</script>

