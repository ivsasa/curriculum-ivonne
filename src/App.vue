<template>
  <the-menu></the-menu>
  <div>
    <router-view/>
  </div>
 <the-footer></the-footer>
</template>

<script setup>

import TheMenu from "./components/TheMenu";
import TheFooter from "./components/TheFooter";


require("@/assets/scss/_reset.scss");
require("@/assets/scss/estructure.scss");

</script>