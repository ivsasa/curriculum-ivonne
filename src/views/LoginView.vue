<template>

    <div class="sing-in">
        <h1>Página de Acceso</h1>
        {{ store.getEmailUser }}

        <fieldset>
            <form class="myForm" id="signIn" @submit.prevent="signIn" action="#">
                <ul class="field">
                    <li class="field">
                        <div class="control">
                            <label for="email">Correo electronico:</label>
                            <input v-model="form.email" type="email" id="email" required>
                        </div>
                    </li>
                    <br>
                    <li class="field">
                        <div class="control">
                            <label for="password">Contraseña:</label>
                            <input v-model="form.password" type="password" id="password" required>
                        </div>
                    </li>
                </ul>


                <button :disabled="store.user === null ? false : true"> Login </button>

                <input @click="desconectar" type="button" value="Logout"><strong>{{ store.errores }}</strong>

                <div v-if="validacionError" class="error" style="background-color: #128a92; color:white">
                    Error:{{ validacionError }}
                </div>


            </form>
        </fieldset>
    </div>

</template>


<script setup>
//Libraries
import { useStoreUsers } from '@/store/users';
import { reactive, ref } from 'vue';

//Inicializar store Pinia
const store = useStoreUsers();


const form = reactive(
    {
        email: 'ivonne9410@hotmail.com',
        password: '000000000'
    }
);

const disabled = ref(false);

const validacionError = ref(false);


const autentificar = async () => {
    try {
        validacionError.value = false;
        await store.signIn(form);
        disabled.value = false;
    } catch (error) {
        validacionError.value = error.message;
        console.log("Mi error", error);
    }

}

const desconectar = () => {
    store.logout();

}

</script>