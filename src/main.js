
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Para cargar iconos
import {library} from '@fortawesome/fontawesome-svg-core'; //Devuelve el objeto library
//import {fas} from '@fortawesome/free-solid-svg-icons';
import { faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';


library.add(faPhoenixFramework,faHome);



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(store)
.use(router)
.mount('#app')
