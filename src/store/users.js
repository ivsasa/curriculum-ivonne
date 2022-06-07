import { defineStore } from 'pinia'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStoreUsers = defineStore('users', {
    state: () => {
        return {
            user: null,
        }
    },
    getters: {
        getEmailUser: (state) => {
            if (state.user && state.user.email)
                return state.user.email
            else
                return "No hay usuario";
        }
    },
    actions: {
        logged() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    this.user = user;
                    // ...
                } else {
                    // User is signed out
                    // ...
                    this.user = null;
                }
            });
        },
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
        async signIn({ email, password }) {//destructuring
            // const {email,password} = datos;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            this.user = userCredential.user;


        }
    }
})