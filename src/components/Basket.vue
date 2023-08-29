<script setup>

</script>

<template>
  <div class="basket">
    <div class="basket__container">
      <div class="basket__content">
        <div class="basket__products">
          <div class="basket__products-header">
            <h2 class="basket__h2">Корзина</h2>
          </div>
          <div class="basket__products-card">

            <div class="basket__img">
              <slot name="img">img</slot>
            </div>

            <div class="basket__products-card-title">
              <slot name="title">title</slot>
            </div>

            <div class="basket__products-card-price">
              <slot name="price">price</slot>
            </div>

          </div>
        </div>

        <div class="basket__aside">
          <div class="basket__aside-container">
            <div class="basket__aside-content">
              <div class="basket__aside-content-count">
                <span>Товары 1</span>
              </div>
              <div class="basket__aside-content-total">
                <span>Итого</span>
                <span>512р</span>
              </div>
              <div class="basket__button">Заказать</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.basket {
  width: 100vw;
  height: 100vh;
  &__container {


  }
  &__content {
    display: grid;
    grid-template-areas: 'product aside';
    grid-template-rows: 1fr auto;

    height: 100vh;
  }
  &__products {
    grid-area: product;

  }
  &__products-header {

  }
  &__products-card {

  }
  &__img {

  }
  &__products-card-title {

  }
  &__products-card-price {

  }

  &__aside {
    grid-area: aside;

  }
  &__aside-container {

  }
  &__aside-content {

  }
  &__aside-content-count {

  }
  &__aside-content-total {

  }
  &__button {

  }
}
</style>