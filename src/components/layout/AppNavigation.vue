<script setup>
import {ref} from "vue";

const navItems = ref([
  {title: 'Главная', path: '/', url: new URL('@/assets/images/home/home.jpg', import.meta.url)},
  {title: 'Девочки', path: '/catalog/girls', url: new URL('@/assets/images/home/girls.png', import.meta.url)},
  {title: 'Мальчики', path: '/catalog/boys', url: new URL('@/assets/images/home/boys.png', import.meta.url)},
  {title: 'Контакты', path: '/contacts', url: new URL('@/assets/images/home/contacts.png', import.meta.url)},
  {title: 'Корзина', path: '/basket', url: new URL('@/assets/images/home/basket.png', import.meta.url)},
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
      <img :src="item.url" :alt="item.title" class="navigation__img">
      <div class="navigation__title">
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
  justify-content: center;
  align-items: center;
  text-align: center;


  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title{
    box-sizing: border-box;
    padding: 5px;
    letter-spacing: 2px;
    text-shadow: 3px 1px 6px rgba(0, 0, 0, 1);
    &:hover {
      background-color: #ffffff;
      border-radius: 1rem;
      transform: translateY(5px);
      transition: .3s;
    }
  }
  &__img {
    width: 50px;
    &:hover + .navigation__title {
      background-color: #ffffff;
      border-radius: 1rem;
      transform: translateY(5px);
      transition: .3s;
    }
  }
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