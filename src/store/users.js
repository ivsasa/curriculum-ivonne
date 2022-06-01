import { defineStore } from 'pinia'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStoreUsers = defineStore('main', {
    state: () => {
        return {
            user: null,
        }
    },
    getters: {
        getEmailUser: (state) => {
            if(state.user && state.user.email)
                return state.user.email
            else
                return "No hay usuario";
        }
    },
    actions: {
        logout() {
            signOut(auth).then(() => {
                // Sign-out successful.
                // this.user =  null;
            }).catch((error) => {
                // An error happened.
                console.log(error)
            });
        },
        // singIn(datos){
        //console.log(datos.email)
        signIn({ email, password }) {//destructuring
            // const {email,password} = datos;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    this.user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, "=>", errorMessage);
                });

        }
    }
})