<template>
  <div class="contain-fb">
    <div class="header">
      <div>foto</div>
      <div class="about">
        <h1>Datos Personales</h1>
        <div class="campo">
          <strong> Nombre: </strong>
          {{ store.getNombreCompleto }}
        </div>
        <br />
        <div class="campo">
          <strong> Fecha de Nacimiento: </strong>
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
          <strong> </strong>
        </div>
      </div>
      <div class="cfbficha">
        <h1>Educación</h1>
        {{ store.instituciones.inst }}
        <ul>
          <li v-for="(valor, index) in store.instituciones" :key="index">
            {{ valor.nombre }} <br>
            {{ valor.estudios }} <br>
            {{ valor.ciudad }} <br>
            {{ valor.pais }} <br>
            {{ valor.periodo }} <br>
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
    <div class="error" v-if="errores.error">
      {{ errores.message }}
    </div>

    <img v-if="src.length > 0" class="img_1" :src="src" alt="No hay foto" />
    <input type="button" @click="cargarFoto" value="Cargar Foto" />
  </div>
</template>

<script setup>
//Librerias

// 1.- Libreria para cargar el Storage
import { getURL } from "@/firebase.cloud.storage";

//2.- Libreria para cargar datos en el curriculum
import { useStorePerfil } from "@/store/perfil";
import { ref } from "vue";

//Arrancamos store
const store = useStorePerfil();
const errores = ref({ error: false, message: "" });

//Cargar datos personales

store.setDatosPersonales().catch((e) => {
  errores.value = {
    error: true,
    message: e.message,
  };
});

//Cargar datos curriculares
store.setDatosCurricular();

//Funcion para cargar foto con un boton
const src = ref("");

const cargarFoto = async () => {
  src.value = await getURL("big-data.jpg");
};

//Cargar SCSS
require("@/assets/scss/Views.scss");
</script>
