<template>
  <div class="container1" >
    <div class="foto">
      <img alt="Foto" src="../assets/foto.jpg">
    
    </div>
    <div class="ficha-educacion" >
      <h1>
        Estudios
      </h1>
     
    </div>
  </div>

</template>

<script setup >
require ("@/assets/scss/FichaEducacion.scss")

</script>

<style lang="scss">

.foto{
    width: 25vw;
    padding: 40px;
}

.foto img{
    object-fit: cover;
    // display: block;
    width: 100%;
}


</style>