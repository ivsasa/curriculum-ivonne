import { defineStore } from 'pinia';

export const useStoreProfile = defineStore(
    "profile",
    {
        state: () => {
            return {
                curriculum: [],
                nombre: "Ivonne",
                apellido1: "",
                apellido2: ""
            }
        },
        actions: {
            async cargarData() {
                const response = await fetch('https://raw.githubusercontent.com/ivsasa/json-curriculum/main/data.json');
                const data = await response.json();
                this.curriculum = data
                console.log(data)








            }
        }
    }
)