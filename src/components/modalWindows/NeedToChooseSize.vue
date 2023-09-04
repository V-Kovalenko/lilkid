<script setup>
import {ref} from "vue";
</script>

<template>
  <div class="needToChooseSize">
    <span>Выберите размер</span>
  </div>
</template>

<style scoped lang="scss">
.needToChooseSize{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0,0.9);
  border-radius: 1rem;
  color: white;
  width: max-content;
  padding: 0.7rem;
  z-index: 99;
}
</style>