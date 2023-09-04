<script setup>

import Buttons from "@/components/ui/Buttons.vue";
import {useItemNovelties} from "@/stores/ItemsNovelties";
import {onMounted, ref} from "vue";
import ProductAddedToBasket from "@/components/modalWindows/ProductAddedToBasket.vue";
import NeedToChooseSize from "@/components/modalWindows/NeedToChooseSize.vue";


const novelties = useItemNovelties()
const emit = defineEmits(['emitCloseModalWindow', 'addToBasket', 'goToBasket'])
const disabledButtonAddToBasket = ref(true)
const buttonClicked = ref(false) //state переключение кнопок добавить - перейти

const emitCloseModalWindow = () => {
  emit('emitCloseModalWindow')
}
const emitAddToBasket = () => {
  emit('addToBasket')
}

const toggleButton = () => {  // изменить кнопку добавить на перейти в корзину
  buttonClicked.value = true

}
const clickFunctions = () => {
  emitAddToBasket()
  toggleButton()
}

</script>

<template>

  <div class="about-product" @click.self="emitCloseModalWindow">
    <div class="about-product__content">
      <div class="about-product__header">
        <div class="about-product__title">
          <h2>
            <slot name="title"></slot>
          </h2>
        </div>
        <Buttons btnTitle="Закрыть" @click="emitCloseModalWindow"/>
      </div>
      <div class="about-product__main">
        <div class="about-product__img">
          <slot name="img"/>
        </div>
        <div class="about-product__data">
          <p>
            <slot name="price"/>
          </p>
          <div class="about-product__size">
            <slot name="size"/>
          </div>
          <div class="about-product__description">
            <slot name="description"/>
          </div>
        </div>

      </div>

      <div class="about-product__footer">
        <Buttons
            btnTitle="Назад"
            @click="emitCloseModalWindow"
        />
        <RouterLink to="/basket">
          <Buttons v-if="buttonClicked" btnTitle="Перейти в корзину" :btnGoToBasket="false" @click="toggleButton"/>
        </RouterLink>

        <Buttons
            v-if="!buttonClicked"
            btnTitle="Добавить в корзину"
            :addToCart="true"
            @click="clickFunctions"
        />


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
    background: $background-color-app;
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
    height: max-content;
    padding: 1rem;
    cursor: default;
    //margin-bottom: 1rem;
    width: 320px;
    max-width: 350px;
    flex-wrap: wrap;

  }

  &__size {
    display: flex;
    gap: 10px;
    margin-bottom: 5px;
  }

  &__description {
    font-size: 1rem;
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

.productAddedToBasket, .needToChooseSize {
  position: absolute;
}
</style>
