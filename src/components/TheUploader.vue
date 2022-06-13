<template>

    <input type="file" @change="configurarSubida" accept="image/*">

</template>

<script setup>
const emits = defineEmits(['emitirFichero']

);
const configurarSubida = evento => {
    //Comprobamos si hay ficheros seleccionados
    if (evento.target.files.length > 0) {
        //Se lo enviamos/emitimos al padre
        emits('emitirFichero',evento.target.files[0]);
    }
    
}




</script>