<script setup>
import AppNavigation from "@/components/layout/AppNavigation.vue";

</script>

<template>
  <header class="header">
    <img src="@/assets/images/logo.jpg" alt="logo" class="header__logo">
    <AppNavigation/>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  grid-column-gap: 3rem;
  padding: 1rem 1rem;
  align-items: center;
  color: black;
  &__logo {
    width: 100px;
    border-radius: 100%;
  }
}
</style>