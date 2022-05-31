<template>
  <div class="about">
    <h1>Acerca de</h1>
    <fieldset>
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
    </fieldset>
    <pre>
      {{ store.datosPersonales }}
    </pre>
  </div>
</template>

<script setup>
//Librerias 
import { useStorePerfil } from '@/store/perfil';
//Arrancamos store
const store = useStorePerfil();

//Cargar datos
store.setDatosPersonales();
</script>
