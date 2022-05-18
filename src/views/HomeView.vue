<template>
  <div class="body" >
    <div class="encabezado">
      <div class="foto">
        <img alt="Foto" src="../assets/foto.jpg">
      </div>
      <div class="descripcion">
        <h1 class="title-descripcion" >Descripción</h1> <br>
        <p>Nombre: Ivonne Sánchez Sánchez</p> <br>
        <p>Télefono: 603351517</p> <br>
        <p>Email: ivonne9410@hotmail.com</p> <br>
      </div>
    </div>
    <br>
    <div class="desarrollo">
      <div class="cursos">
        <h1>Cursos</h1>
        <br>
        <p v-for="valor in data.cursos.id7" :key="valor" value="cursos">
          {{ valor }}
        </p>
        <br>
        <p v-for="valor in data.cursos.id8" :key="valor" value="cursos">
          {{ valor }}
        </p>
        <br>
        <p v-for="valor in data.cursos.id9" :key="valor" value="cursos">
          {{ valor }}
        </p>
    <br>
        <p v-for="valor in data.cursos.id10" :key="valor" value="cursos">
          {{ valor }}
        </p>
    <br>
        <p v-for="valor in data.cursos.id11" :key="valor" value="cursos">
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
  </div>

</template>

<script setup >

import { ref } from "vue";
let data = ref();

require("@/assets/scss/Views.scss")

const obtenerDatos = async () => {
  let response = await fetch('https://raw.githubusercontent.com/ivsasa/json-curriculum/main/data.json')

  data.value = await response.json()

}
obtenerDatos()

</script>

