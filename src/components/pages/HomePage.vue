<script setup>
import {ref, computed} from "vue";

import HomePageContent from "@/components/homePage/HomePageContent.vue";
</script>

<template>
  <div class="container">
    <HomePageContent/>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-grow: 1;
}
</style>
