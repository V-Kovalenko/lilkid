<script setup>
import {useItemNovelties} from "@/stores/ItemsNovelties";
import Buttons from "@/components/ui/Buttons.vue";
import {onMounted} from "vue";

const noveltiesItem = useItemNovelties()
console.log('noveltiesItem.basketProducts: ', noveltiesItem.basketProducts)

/*--- удаление товара из корзины--->>>*/
const deleteProduct = (product, index) => {
  noveltiesItem.basketProducts.splice(index, 1)
  window.localStorage.setItem('CART', JSON.stringify(noveltiesItem.basketProducts))
}
onMounted(() => {
  noveltiesItem.basketProducts = JSON.parse(localStorage.getItem('CART'))
})
/*--- удаление товара из корзины---<<<*/

const test = (count) => {
  console.log(count)
  // return noveltiesItem.basketProducts.map(it => it.selectedSize)
}

</script>

<template>
  <div class="basket">
    <div class="basket__container">
      <div class="basket__header">
        <h2 class="basket__h2">Корзина</h2>
      </div>
      <div class="basket__content" v-for="(product, index) in noveltiesItem.basketProducts" :key="index">
        <div class="basket__products">

          <div class="basket__products-card">

            <div class="basket__img">
              <img :src="product.products.url" alt="img">
            </div>

            <div class="basket__products-card-title">
              <h4>{{ product.title }}</h4>
              <p>{{ product.description }}</p>
              <h4 style="display: inline">Размер: </h4>
              <span>{{ product.selectedSize }} </span>
            </div>

            <Buttons btnTitle="-" :btnIncrementAndDecrement="true" class="basket__btn-incrementAndDecrement"/>
            <div v-for="(count, idx) in product.size">
<!--              <span >{{product.size === noveltiesItem.basketProducts.selectedSize}</span>-->
              <span >{{test(count)}}</span>
            </div>
            <Buttons btnTitle="+" :btnIncrementAndDecrement="true" class="basket__btn-incrementAndDecrement"/>
            <div class="basket__products-card-price">
              <p>{{ product.price }} {{ product.unit }}</p>
              <Buttons :btnDeleteProduct="true" @click="deleteProduct(product, index)"/>
            </div>

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
    margin-bottom: 1rem;


  }

  &__products {
    grid-area: product;
    display: flex;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    flex-direction: column;
    gap: 1rem;
    margin-right: 1rem;
    width: 70%;
    border-radius: 1rem;


  }

  &__header {

  }

  &__products-card {
    display: flex;
    //justify-content: space-between;
    width: 100%;
    margin-right: 1rem;
    //box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    padding: 1rem;


  }

  &__img {
    width: 100px;
    margin-right: 1rem;
  }

  &__products-card-title {
    width: 300px;
  }

  &__products-card-btn {
    margin-right: 200px;
  }

  &__products-card-price {
    font-weight: 700;
  }

  &__aside {
    grid-area: aside;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    padding: 1rem;
    position: fixed;
    top: 167px;
    right: 23px;
    width: 390px;
    border-radius: 1rem;
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

  &__btn-incrementAndDecrement {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>