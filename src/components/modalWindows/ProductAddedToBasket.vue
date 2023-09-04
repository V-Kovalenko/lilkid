<script setup>
import {ref} from "vue";
</script>

<template>
  <div class="productAddedToBasket">
    <span class="material-icons">expand_more</span>
    <span>Товар добавлен в корзину!</span>
  </div>
</template>

<style scoped lang="scss">
.productAddedToBasket{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0,0.9);
  border-radius: 1rem;
  color: white;
  width: max-content;
  padding: 0.7rem;
  z-index: 11;
}
</style>