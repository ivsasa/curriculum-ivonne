<template>
  <div class="contain" v-if="loading">
    <div class="encabezado">
      <div class="foto">
        <img alt="Foto" src="../assets/foto.jpg">
      </div>
      <div class="descripcion">
        <h1 class="title-descripcion">Descripción</h1> <br>
        <p><font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> Ivonne Sánchez Sánchez</p> <br>
        <p><font-awesome-icon icon="mobile"></font-awesome-icon> <b>Télefono:</b> 603351517</p> <br>
        <p><font-awesome-icon icon="envelope-open"></font-awesome-icon> <b>Email:</b> ivonne9410@hotmail.com</p> <br>
      </div>
    </div>
    <br>
    <div class="desarrollo">
      <div class="cursos">
        <h1>Cursos</h1>
        <br>
        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.cursos.id7.nombre }} <br>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Años:</b> {{ data.cursos.id7.años }}
        </p>
        <br>
        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.cursos.id8.nombre }} <br>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Años:</b> {{ data.cursos.id8.años }}
        </p>
        <br>
        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.cursos.id9.nombre }} <br>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Años:</b> {{ data.cursos.id9.años }}
        </p>
        <br>
        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.cursos.id10.nombre }} <br>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Años:</b> {{ data.cursos.id10.años }}
        </p>
        <br>
        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.cursos.id11.nombre }} <br>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Años:</b> {{ data.cursos.id11.años }}
        </p>

      </div>
      <div class="estudios">
        <h1 class="title-estudios" >Estudios</h1>
        <br>
        <p>

          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.instituciones.id1.nombre }} <br>

          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.instituciones.id1.ciudad }} <br>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.instituciones.id1.pais }}
          <br>
          <font-awesome-icon icon="school"></font-awesome-icon> <b>Estudios:</b> {{ data.instituciones.id1.estudios }}
          <br>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Años:</b> {{ data.instituciones.id1.años }}
          <br>
        </p>
        <br>
        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.instituciones.id2.nombre }}
          <br>
          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.instituciones.id2.ciudad }}
          <br>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.instituciones.id2.pais }}
          <br>
          <font-awesome-icon icon="school"></font-awesome-icon> <b>Estudios:</b> {{ data.instituciones.id2.estudios }}
          <br>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Años:</b> {{ data.instituciones.id2.años }}
          <br>
        </p>
        <br>
        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.instituciones.id3.nombre }}
          <br>
          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.instituciones.id3.ciudad }}
          <br>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.instituciones.id3.pais }}
          <br>
          <font-awesome-icon icon="school"></font-awesome-icon> <b>Estudios:</b> {{ data.instituciones.id3.estudios }}
          <br>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Años:</b> {{ data.instituciones.id3.años }}
          <br>
        </p>

      </div>
    <div>
    <h1>Experiencia laboral</h1>
    <br>
    <p>
      <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.empresas.id4.nombre }} <br>
      <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.empresas.id4.ciudad }} <br>
      <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.empresas.id4.pais }} <br>
      <font-awesome-icon icon="calendar-days"></font-awesome-icon><b>Años:</b> {{ data.empresas.id4.años }} <br>
      <font-awesome-icon icon="briefcase"></font-awesome-icon> <b>Puesto:</b> {{ data.empresas.id4.puesto }} <br>
    </p>
    <br>
    <p>
      <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.empresas.id5.nombre }} <br>
      <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.empresas.id5.ciudad }} <br>
      <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.empresas.id5.pais }} <br>
      <font-awesome-icon icon="calendar-days"></font-awesome-icon><b>Años:</b> {{ data.empresas.id5.años }} <br>
      <font-awesome-icon icon="briefcase"></font-awesome-icon> <b>Puesto:</b> {{ data.empresas.id5.puesto }} <br>
    </p>
    <br>
    <p>
      <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> {{ data.empresas.id6.nombre }} <br>
      <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.empresas.id6.ciudad }} <br>
      <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.empresas.id6.pais }} <br>
      <font-awesome-icon icon="calendar-days"></font-awesome-icon><b>Años:</b> {{ data.empresas.id6.años }} <br>
      <font-awesome-icon icon="briefcase"></font-awesome-icon> <b>Puesto:</b> {{ data.empresas.id6.puesto }} <br>
    </p>
    
  </div>
    </div>
    
  </div>

</template>

<script setup >

// //Usando Pinia
// import {useStoreProfile} from "@/store/profile";
// const store = useStoreProfile();

// store.cargarData()



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

