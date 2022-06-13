import { defineStore } from 'pinia'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase'


// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStoreUsers = defineStore({
    id: 'users',
    state: () => {
        return {
            user: null,
            
        }
    },
    actions: {

        async signIn({ email, password }) {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            this.user = userCredential.user;
            this.isLogged = true;
        },
        logout() {
            signOut(auth).then(() => {
                // Sign-out successful.
                this.user = null;
            }).catch((error) => {
                // An error happened.
                console.log(error);
            });

        },

        logged() {
            if(this.user!==null)
            return;
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    this.user = user;
                    this.isLogged = true;
                    // ...
                } else {
                    // User is signed out
                    // ...
                    
                }
            });
        }
        

    },


    getters: {
        getEmailUser: (state) => {
            if (state.user && state.user.email)
                return state.user.email
            else
                return "";
        }
    },

})