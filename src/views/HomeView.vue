<template>
  <div class="contain" v-if="loading" >
    <div class="encabezado">
      <div class="foto">
        <img alt="Foto" src="../assets/foto.jpg">
      </div>
      <div class="descripcion">
        <h1 class="title-descripcion" >Descripción</h1> <br>
        <p><b>Nombre:</b> Ivonne Sánchez Sánchez</p> <br>
        <p><b>Télefono:</b> 603351517</p> <br>
        <p><b>Email:</b> ivonne9410@hotmail.com</p> <br>
      </div>
    </div>
    <br>
    <div class="desarrollo">
      <div class="cursos">
        <h1>Cursos</h1>
        <br>
        <p>
          <b>Nombre:</b> {{data.cursos.id7.nombre}} <br>
          <b>Años:</b> {{data.cursos.id7.años}}
        </p>
        <br>
        <p>
          <b>Nombre:</b> {{data.cursos.id8.nombre}} <br>
          <b>Años:</b> {{data.cursos.id8.años}}
        </p>
        <br>
        <p>
          <b>Nombre:</b> {{data.cursos.id9.nombre}} <br>
          <b>Años:</b> {{data.cursos.id9.años}}
        </p>
        <br>
        <p>
          <b>Nombre:</b> {{data.cursos.id10.nombre}} <br>
          <b>Años:</b> {{data.cursos.id10.años}}
        </p>
        <br>
        <p>
          <b>Nombre:</b> {{data.cursos.id11.nombre}} <br>
          <b>Años:</b> {{data.cursos.id11.años}}
        </p>
        
      </div> 
      <div class="estudios">
        <h1>Estudios</h1>
        <br>
        <p>
          <b>Nombre:</b> {{data.instituciones.id1.nombre}} <br>
          <b>Ciudad:</b> {{data.instituciones.id1.ciudad}} <br>
          <b>País:</b> {{data.instituciones.id1.pais}} <br>
          <b>Estudios:</b> {{data.instituciones.id1.estudios}} <br>
          <b>Años:</b> {{data.instituciones.id1.años}} <br>
        </p>
        <br>
        <p>
          <b>Nombre:</b> {{data.instituciones.id2.nombre}} <br>
          <b>Ciudad:</b> {{data.instituciones.id2.ciudad}} <br>
          <b>País:</b> {{data.instituciones.id2.pais}} <br>
          <b>Estudios:</b> {{data.instituciones.id2.estudios}} <br>
          <b>Años:</b> {{data.instituciones.id2.años}} <br>
        </p>
        <br>
        <p>
          <b>Nombre:</b> {{data.instituciones.id3.nombre}} <br>
          <b>Ciudad:</b> {{data.instituciones.id3.ciudad}} <br>
          <b>País:</b> {{data.instituciones.id3.pais}} <br>
          <b>Estudios:</b> {{data.instituciones.id3.estudios}} <br>
          <b>Años:</b> {{data.instituciones.id3.años}} <br>
        </p>


      </div>
    </div>
  </div>

</template>

<script setup >

import { ref } from "vue";
let data = ref();
let loading = ref (false);

require("@/assets/scss/Views.scss")

const obtenerDatos = async () => {
  try{let response = await fetch('https://raw.githubusercontent.com/ivsasa/json-curriculum/main/data.json')

  data.value = await response.json()}
  catch (error) {console.log(error)}
  loading.value=true
}
obtenerDatos()

</script>

