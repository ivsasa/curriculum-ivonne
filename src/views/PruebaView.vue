<template>
    <div class="container">
        Curriculum Vitae Prueba


        <fieldset>
            <div class="campo">
                <ul>
                    <strong>Estudios:</strong><li v-for="(valor, index) in store.curriculum" :key="index">
                        {{ valor.titulo }}
                    </li>
                </ul>
                <strong>
                    
                </strong>
            </div>
        </fieldset>


    </div>

</template>

<script setup>
//Importacion del store de Pinia o variable centralizada de nuesra app
import { useStoreDatosPersonales } from "../store/datosPersonales";
require("@/assets/scss/Views.scss")

//Arrancar el store
const store = useStoreDatosPersonales();

//Cargar datos
store.setDatosCurriculum();


</script>