<script setup>
import {RouterView } from 'vue-router'
import TheMenu from "./components/TheMenu";
import TheFooter from "./components/TheFooter";
import {useStoreUsers} from "./store/users"

require("@/assets/scss/_reset.scss");
require("@/assets/scss/estructure.scss");

const almacen =useStoreUsers();
almacen.logged();







</script>



<template>
  <the-menu
  :correo="almacen.getEmailUser" 
  :logged="almacen.user?true:false">
    </the-menu>
  <div>
    <router-view/>
  </div>
 <the-footer></the-footer>
 
</template>

