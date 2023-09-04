<script setup>
import {computed} from "vue";

const props = defineProps({
  general: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  addToCart: {
    type: Boolean,
    default: false
  },
  btnTitle: {
    type: String,
    default: 'button'
  },
  btnDefault: {
    type: Boolean,
    default: false
  },
  btnGoToBasket: {
    type: Boolean,
    default: false
  },
  btnIncrementAndDecrement: {
    type: Boolean,
    default: false
  },
  btnDeleteProduct: {
    type: Boolean,
    default: false
  },
})

const buttonStyle = computed(() => {
  return {
    'btn': props.general,
    'btn__disabled': props.disabled,
    'btn__addToCart': props.addToCart,
    'default': props.btnDefault,
    'btn__GoToBasket': props.btnGoToBasket,
    'btn__incrementAndDecrement': props.btnIncrementAndDecrement,
    'btn__deleteProduct': props.btnDeleteProduct,
  }
})

</script>

<template>
  <div
      class="btn"
      :class="buttonStyle"
  >
    <button :class="buttonStyle">{{ props.btnTitle }}</button>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/color";

.btn {
  height: max-content;
  border-radius: 1rem;
  //background-color: #eed0d0;
  border: 1px solid black;
  padding: 0.2rem;
  font-size: 1.2rem;
  background-color: #cc81ec;

  &:hover {
    background: $hover;
    scale: 1.1;
  }

  &__addToCart {
    //background-color: #b381e0;

    &:hover {
      background: $hover;
    }
  }
  &__incrementAndDecrement {
    width: 32px;
    height: 32px;
    border-radius: 8px;

  }
  &__deleteProduct {
    background-color: red;
  }
  &__disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

.default {
  padding: 0;
  background-color: transparent;
  border: none;
}
</style>