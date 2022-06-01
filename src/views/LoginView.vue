<template>

    <div class="sing-in">
        <h1>Página de Acceso</h1>
        {{store.getEmailUser}}

        <fieldset>
            <form @submit.prevent="autentificar" action="#" id="myForm">
                <div class="control">
                    <label for="email">
                        Correo electronico:
                    </label>
                    <input v-model="form.email" type="email" id="email" required>
                </div>
                <br>
                <div class="control">
                    <label for="password">
                        Contraseña:
                    </label>
                    <input v-model="form.password" type="password" id="password" required>
                </div>
                <br>
                <button>Login</button>

                <input @click="desconectar" type="button" value="Logout">


            </form>
        </fieldset>
    </div>

</template>


<script setup>
//Libraries
import { useStoreUsers } from '@/store/users';
import {reactive} from 'vue';

//Inicializar store Pinia
const store = useStoreUsers();


const form = reactive (
    {
        email: 'ivonne9410@hotmail.com',
        password: '000000000'
    }
);


const autentificar = () => {
    store.signIn(form);
}

const desconectar = () => {
    store.logout();
    
}

</script>