import { defineStore } from 'pinia';
import { db } from '@/firebase.js';
import { collection, query, getDocs } from '@firebase/firestore';




export const useStoreDatosPersonales = defineStore(
    "datospersonales",
    {
        state: () => {
            return {
                curriculum: []

            }

        },
        actions: {
            /**
             * Funcion que coge datos de firestore y los almacena en un array de datos
             */
            async setDatosCurriculum() {
                const curriculumRef = collection(db, 'curriculum');
                const consulta = query(curriculumRef);
                const resultadoConsulta = await getDocs(consulta);
                resultadoConsulta.forEach(
                    (fila) => {
                        this.curriculum.push(fila.data());
                    }
                );
            }

        }


    }
);






