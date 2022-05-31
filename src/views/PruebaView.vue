<template>
    <div class="container">
        Curriculum Vitae Prueba
        <ul>
            <li v-for="(valor, index) in store.curriculum" :key="index">
                {{ valor.titulo }}
            </li>
        </ul>
        


    </div>

</template>

<script setup>
//Importacion del store de Pinia o variable centralizada de nuesra app
import { useStoreDatosPersonales } from "../store/datosPersonales";

//Arrancar el store
const store = useStoreDatosPersonales();

//Cargar datos
store.setDatosCurriculum();





</script>