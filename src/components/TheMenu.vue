<template>

    <nav 
    class="main-menu">


        <router-link to="/">

            <font-awesome-icon :icon="['fa-brands', 'phoenix-framework']" class="svg-footer" /> INICIO

        </router-link>
        <router-link to="/cv">

            <font-awesome-icon icon="house" class="svg-footer">

            </font-awesome-icon> CURRICULUM

        </router-link>
        <router-link to="/cvfirebase">

            <font-awesome-icon icon="house" class="svg-footer">

            </font-awesome-icon> CV FIREBASE

        </router-link>
        <router-link to="/login">

            <font-awesome-icon icon="arrow-right-from-bracket" class="svg-footer">

            </font-awesome-icon> LOG IN <br>{{correo}}

        </router-link>


    </nav>


</template>

<script setup>
defineProps({
        correo:{
            type: String,
            default: ''
        },
        logged:{
            type: Boolean,
            default: false
        }
    });


require("@/assets/scss/TheMenu.scss")

</script>