<script setup>
import {useItemNovelties} from "@/stores/ItemsNovelties";
const noveltiesItem = useItemNovelties()
</script>

<template>
  <div class="basket" >
    <div class="basket__container">
      <div class="basket__header">
        <h2 class="basket__h2">Корзина</h2>
      </div>
      <div class="basket__content" >
        <div class="basket__products" >

          <div class="basket__products-card" v-for="product in noveltiesItem.basketProducts">

            <div class="basket__img">
              <slot name="img">img</slot>
            </div>

            <div class="basket__products-card-title">
              <slot name="title">{{product.title}}</slot>
            </div>

            <div class="basket__products-card-price">
              <slot name="price">{{product.price}}</slot>
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
  &__container {

  }
  &__content {
    display: grid;
    grid-template-areas: 'product aside';
    grid-template-columns: 1fr auto;


  }
  &__products {
    grid-area: product;
    display: flex;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    flex-direction: column;
    gap: 1rem;
    margin-right: 1rem;


  }
  &__header {

  }
  &__products-card {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-right: 1rem;
    //box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    padding: 1rem;






  }
  &__img {

  }
  &__products-card-title {

  }
  &__products-card-price {

  }

  &__aside {
    grid-area: aside;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    padding: 1rem;
  }
  &__aside-container {

  }
  &__aside-content {
    display: flex;
    flex-direction: column;
  }
  &__aside-content-count {

  }
  &__aside-content-total {

  }
  &__button {

  }
}
</style>