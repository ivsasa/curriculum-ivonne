import { defineStore } from 'pinia';
import { db } from '@/firebase.js';
import { doc, getDoc } from "firebase/firestore";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStorePerfil = defineStore('idPerfil', {
    // arrow function recommended for full type inference
    state: () => {
        /**
         * @description - Retorna un objeto que es el estado de Pinia
         * @param {Object} datosPersonales - Datos cogidos de la colección datospersonales de firestore
         */


        return {
            // all these properties will have their type inferred automatically
            datosPersonales: {
                Nombre: 'Sin nombre',
                Apellido1: '',
                Apellido2: '',
                fechaNacimiento: null
            },


        }
    },
    actions: {
        /**
         * @description Leer datos de la coleccion firestore datospersonales y guardarlo en la propiedad datosPersonales
         */


        async setDatosPersonales() {
            const docRef = doc(db, "datospersonales", "dp-1");
            const docCaputura = await getDoc(docRef);
            if (docCaputura.exists()) {
                console.log("Document data:", docCaputura.data());
                this.datosPersonales = docCaputura.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
    },
    getters: {
        getNombreCompleto(state) {
            return `${state.datosPersonales.Nombre} ${state.datosPersonales.Apellido1} ${state.datosPersonales.Apellido2}`;
        },
        getDiaMesAnho(state) {
            if (!state.datosPersonales.fechaNacimiento || typeof state.datosPersonales.fechaNacimiento.toDate !== "function") {
                return '';

            }
            const date = new Date(state.datosPersonales.fechaNacimiento.toDate());
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        }
    }
});