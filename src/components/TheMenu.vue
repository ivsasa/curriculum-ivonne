<template>

    <nav class="main-menu">
        <router-link to="/">
            
            
        <font-awesome-icon icon="house" >

        </font-awesome-icon>    
            
            
        </router-link>

        <router-link to="/experience"> 
            
            <font-awesome-icon :icon="['fa-brands','phoenix-framework']"/>
            
            
        </router-link>

    </nav>


</template>

<script setup>



require("@/assets/scss/TheMenu.scss")

</script>