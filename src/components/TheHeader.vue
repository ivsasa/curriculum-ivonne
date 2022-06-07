<template>
<header class="main-header">
    <h1>Ivsasa</h1>
</header>




</template>

<script setup >
    defineProps(
        {
            correo: {
                type: string,
                default: " "
            },
            logged: {
                type:boolean,
                default:false
            }          

        }
    )

</script>

<style scoped >
h1{
    text-align: start;
    margin:0;
}
</style>