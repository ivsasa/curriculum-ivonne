<template>
<div class="footer2">
    <p>
        <strong>Ivsasa</strong> <a href="">Ivsasa</a> <br> 
    </p>
    {{email}}
</div>

</template>

<script setup >

defineProps(
    {
        email: {
            type: String,
            default: ''
        }
    }
);


</script>