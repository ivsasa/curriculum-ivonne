<script setup>

import TheMenu from "./components/TheMenu";
import TheFooter from "./components/TheFooter";
// import TheHeader from "./components/TheHeader";
import TheLogout from "./components/TheLogout";
import {useStoreUsers} from "./store/users"

require("@/assets/scss/_reset.scss");
require("@/assets/scss/estructure.scss");

const almacen =useStoreUsers();
almacen.logged();


</script>



<template>
  <!-- <the-header
  :correo="almacen.getEmailUser"
  :logged="almacen.user?true:false"
  
  
  ></the-header> -->
  <the-menu></the-menu>
  <div>
    <router-view/>
  </div>
 <the-footer></the-footer>
 <the-logout></the-logout>
</template>

