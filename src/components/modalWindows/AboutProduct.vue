<script setup>

import Buttons from "@/components/ui/Buttons.vue";


const emit = defineEmits(['closeModalWindow'])

const closeModalWindow = () => {
  emit('closeModalWindow')
}

</script>

<template>
  <div class="about-product" @click.self="closeModalWindow">
    <div class="about-product__content">
      <div class="about-product__header">
        <div class="about-product__title">
          <h2>
            <slot name="title"></slot>
          </h2>
        </div>
        <Buttons btnTitle="Закрыть" @click="closeModalWindow"/>
      </div>
      <div class="about-product__main">
        <div class="about-product__img">
          <slot name="img"/>
        </div>
        <div class="about-product__data">
          <p>
            <slot name="price"/>
          </p>
          <p>
            <slot name="size"/>
          </p>
        </div>

      </div>

      <div class="about-product__footer">
        <Buttons
            btnTitle="Назад"
            @click="closeModalWindow"
        />
        <Buttons btnTitle="Добавить в корзину" :addToCart="true"/>

      </div>
    </div>
  </div>


</template>

<style scoped lang="scss">
@import "@/assets/scss/color";

.about-product {
  box-sizing: border-box;
  max-height: 100vh;
  z-index: 10;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  //transform: translate(5%, 0%);
  background-color: rgba(100, 100, 100, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    //position: relative;
    grid-template-rows: auto 1fr auto;
    //grid-template-columns: 1fr 1fr;
    display: grid;
    grid-template-areas:
  'header header'
  'main main'
  'footer footer';
    background: $background-color;
    border-radius: 1rem;
    font-size: 1.23rem;
    overflow-y: auto;
    padding: 2rem 2rem;

    width: 80vw;
  }


  &__header {
    display: flex;
    justify-content: space-between;
    grid-area: header;
    margin-bottom: 1rem;
    position: relative;
  }

  &__main {
    display: grid;
    grid-area: main;
    grid-template-areas:
    'img data';
    grid-template-columns: 3fr 1fr;


    //position: relative;
  }

  &__data {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;
    grid-area: data;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    //height: max-content;
    padding: 1rem;
    cursor: default;
    margin-bottom: 1rem;
    width: max-content;
  }

  &__img {
    display: flex;
    flex-wrap: wrap;
    //gap: 1px;
    grid-area: img;
    cursor: zoom-in;
  }

  &__footer {
    grid-area: footer;
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>
