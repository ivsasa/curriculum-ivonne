<template>

    <nav class="main-menu">
        <router-link to="/">
            
            
        <font-awesome-icon icon="house" >

        </font-awesome-icon> HOME
            
            
        </router-link>

        <router-link to="/experience"> 
            
            <font-awesome-icon :icon="['fa-brands','phoenix-framework']"/> EXPERIENCIA
            
            
        </router-link>

    </nav>


</template>

<script setup>



require("@/assets/scss/TheMenu.scss")

</script>