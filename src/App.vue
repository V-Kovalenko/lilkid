<script setup>
import {RouterView} from 'vue-router'
import AppHeader from "@/components/layout/AppHeader.vue";
</script>

<template>
  <div class="layout">
    <AppHeader/>
    <main class="layout__content">
      <router-view/>
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout {
  background: linear-gradient(to right, #e295f1, #8012de);
  position: relative;
  max-width: 1920px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  //padding: 0 25px;
  padding: 0 6rem;


  &__content {
    display: flex;
    width: 100%;
    flex-grow: 1;
  }
}

img {
  display: block;
  width: 100%;
  height: 100vh; /* 100% высоты видимой области экрана */
  object-fit: cover; /* Позволяет изображению растягиваться, чтобы заполнить контейнер */
  overflow: hidden; /* Убирает полосы прокрутки, если изображение больше экрана */
}

</style>
