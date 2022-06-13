<script setup>

import TheMenu from "./components/TheMenu";
import TheFooter from "./components/TheFooter";
// import TheLogout from "./components/TheLogout";
import {useStoreUsers} from "./store/users"
import {provide} from 'vue';

require("@/assets/scss/_reset.scss");
require("@/assets/scss/estructure.scss");

const store =useStoreUsers();
store.logged();
provide('store',store);


</script>



<template>

  <the-menu></the-menu>
  <div>
    <router-view/>
  </div>
 <the-footer></the-footer>
 <!-- <the-logout></the-logout> -->
</template>

