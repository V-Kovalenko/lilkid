<script setup>
const emit = defineEmits(['product'])
const sendEmit = () => {
  emit('product')
}
</script>

<template>
  <div class="catalogMainProducts">
    <div class="catalogMainProducts__content">

      <div class="catalogMainProducts__img" @click="sendEmit">
        <slot name="img">Изображение</slot>
      </div>

      <div class="catalogMainProducts__price">
        <slot name="price">Цена</slot>
      </div>

      <div class="catalogMainProducts__description">
        <slot name="description">Описание</slot>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/color";

.catalogMainProducts {
  //background-color: $background-color;
  //width: 500px;
  //padding: 0 1rem;
  &__content {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__header {

  }

  &__img {
    max-width: 250px;
    margin-bottom: 10px;
    box-shadow: $shadow;

    &:hover {
      scale: 1.1;
      transition: .5s;
      cursor: pointer;
    }
  }

  &__about-product {

  }

  &__price {

  }

  &__description {
    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
  }

}
</style>