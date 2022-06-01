<template>

    <nav class="main-menu">
       

        <router-link to="/inicio">

            <font-awesome-icon :icon="['fa-brands', 'phoenix-framework']" /> INICIO

        </router-link>
         <router-link to="/cv">

            <font-awesome-icon icon="house">

            </font-awesome-icon> CURRICULUM

        </router-link>
        <router-link to="/login">

           <font-awesome-icon icon="arrow-right-from-bracket">

            </font-awesome-icon> LOG IN

        </router-link>

    </nav>


</template>

<script setup>



require("@/assets/scss/TheMenu.scss")

</script>