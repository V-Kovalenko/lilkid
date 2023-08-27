<script setup>
import {ref} from "vue";
import basket from '@/assets/images/basket/basket.png'

const navItems = ref([
  {title: 'Главная', path: '/'},
  {title: 'Девочки', path: '/catalog/girls'},
  {title: 'Мальчики', path: '/catalog/boys'},
  {title: 'Контакты', path: '/contacts'},
  {title: 'Корзина', path: '/basket'},
])
</script>

<template>
  <nav class="navigation">
    <RouterLink
        v-for="item in navItems"
        :to="item.path"
        :key="item.path"
        class="navigation__link"
    >
      <div v-if="item.title === 'Корзина'">
        {{ item.title }}
        <img :src="basket" alt="Basket">
      </div>
      <div v-else>
        {{ item.title }}
      </div>


    </RouterLink>
  </nav>

</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  grid-column-gap: 3rem;
  font-size: 1.5rem;


  &__link {
    box-sizing: border-box;
    padding: 5px;
    letter-spacing: 2px;
    text-shadow: 3px 1px 6px rgba(0, 0, 0, 1);

    &:hover {
      background-color: #ffffff;
      border-radius: 1rem;
      transform: translateY(-5px);
      transition: .3s;

    }
  }
}

img {
  width: 27px;
}
</style>

<!--<nav class="navigation">-->
<!--<RouterLink-->
<!--    v-for="item in navItems"-->
<!--    :to="item.path"-->
<!--    :key="item.path"-->
<!--    class="navigation__link"-->
<!--&gt;-->
<!--  {{ item.title }}-->
<!--</RouterLink>-->
<!--</nav>-->