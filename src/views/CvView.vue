<template>
  <div class="contain" v-if="loading">
    <div class="encabezado">
      <div class="foto">
        <img alt="Foto" src="../assets/foto.jpg">
      </div>
      <div class="descripcion">
        <h1 class="title-descripcion">Datos personales</h1>
        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>Nombre:</b> Ivonne Sánchez Sánchez
        </p>
        <p>
          <font-awesome-icon icon="mobile"></font-awesome-icon> <b>Télefono:</b> 603351517
        </p>
        <p>
          <font-awesome-icon icon="envelope-open"></font-awesome-icon> <b>Email:</b> ivonne9410@hotmail.com
        </p>
      </div>
      <div class="mision">
        <h1 class="title-descripcion">Descripción</h1>
        <p>
        </p>
      </div>
    </div>
    
    <div class="desarrollo">
      <div class="cursos">
        <h1>Cursos</h1>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.cursos.id7.nombre }}</b>
        </p>
        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Periodo:</b> {{ data.cursos.id7.años }}
        </p>

        <br>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.cursos.id8.nombre }}</b>
        </p>
        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Periodo:</b> {{ data.cursos.id8.años }}
        </p>

        <br>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.cursos.id9.nombre }}</b>
        </p>
        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Periodo:</b> {{ data.cursos.id9.años }}
        </p>

        <br>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.cursos.id10.nombre }}</b>
        </p>
        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Periodo:</b> {{ data.cursos.id10.años }}
        </p>

        <br>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.cursos.id11.nombre }}</b>
        </p>
        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Periodo:</b> {{ data.cursos.id11.años }}
        </p>


      </div>
      <div class="estudios">
        <h1 class="title-estudios">Educación</h1>



        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.instituciones.id1.nombre }}</b>
        </p>


        <p>
          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.instituciones.id1.ciudad }}
        </p>

        <p>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.instituciones.id1.pais }}
        </p>

        <p>
          <font-awesome-icon icon="school"></font-awesome-icon> <b>Estudios:</b> {{ data.instituciones.id1.estudios }}
        </p>

        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Periodo:</b> {{ data.instituciones.id1.años }}
        </p>

        <br>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.instituciones.id2.nombre }}</b>
        </p>

        <p>
          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.instituciones.id2.ciudad }}
        </p>

        <p>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.instituciones.id2.pais }}
        </p>

        <p>
          <font-awesome-icon icon="school"></font-awesome-icon> <b>Estudios:</b> {{ data.instituciones.id2.estudios }}
        </p>

        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Periodo:</b> {{ data.instituciones.id2.años }}
        </p>

        <br>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.instituciones.id3.nombre }}</b>
        </p>

        <p>
          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.instituciones.id3.ciudad }}
        </p>

        <p>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.instituciones.id3.pais }}
        </p>

        <p>
          <font-awesome-icon icon="school"></font-awesome-icon> <b>Estudios:</b> {{ data.instituciones.id3.estudios }}
        </p>

        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon> <b>Periodo:</b> {{ data.instituciones.id3.años }}
        </p>



      </div>
      <div>
        <h1>Experiencia Laboral</h1>


        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.empresas.id4.nombre }}</b>
        </p>
        <p>
          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.empresas.id4.ciudad }}
        </p>
        <p>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.empresas.id4.pais }}
        </p>
        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon><b>Periodo:</b> {{ data.empresas.id4.años }}
        </p>
        <p>
          <font-awesome-icon icon="briefcase"></font-awesome-icon> <b>Puesto:</b> {{ data.empresas.id4.puesto }}
        </p>

        <br>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.empresas.id5.nombre }}</b>
        </p>
        <p>
          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.empresas.id5.ciudad }}
        </p>
        <p>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.empresas.id5.pais }}
        </p>
        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon><b>Periodo:</b> {{ data.empresas.id5.años }}
        </p>
        <p>
          <font-awesome-icon icon="briefcase"></font-awesome-icon> <b>Puesto:</b> {{ data.empresas.id5.puesto }}
        </p>

        <br>

        <p>
          <font-awesome-icon icon="signature"></font-awesome-icon> <b>{{ data.empresas.id6.nombre }}</b>
        </p>
        <p>
          <font-awesome-icon icon="tree-city"></font-awesome-icon> <b>Ciudad:</b> {{ data.empresas.id6.ciudad }}
        </p>
        <p>
          <font-awesome-icon icon="earth-africa"></font-awesome-icon> <b>País:</b> {{ data.empresas.id6.pais }}
        </p>
        <p>
          <font-awesome-icon icon="calendar-days"></font-awesome-icon><b>Periodo:</b> {{ data.empresas.id6.años }}
        </p>
        <p>
          <font-awesome-icon icon="briefcase"></font-awesome-icon> <b>Puesto:</b> {{ data.empresas.id6.puesto }}
        </p>



      </div>
    </div>

  </div>

</template>

<script setup >




import { ref } from "vue";
let data = ref();
let loading = ref(false);

//Cargar el SCSS
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

