<script setup>
import {ref} from "vue";

const contentCards = ref([
  {
    image: new URL("@/assets/images/contacts/address.jpg", import.meta.url),
    name: 'Адрес',
    text: 'г. Кемерово, ул. Марковцева д. 24',
    link: false
  },
  {
    image: new URL("@/assets/images/contacts/telephone.png", import.meta.url),
    name: 'Телефон',
    text: '+7 (900) 105 22 70',
    link: false
  },
  {
    image: new URL("@/assets/images/contacts/email.png", import.meta.url),
    name: 'Email',
    text: 'alinakovalenko109@gmail.com',
    link: true
  },
  {
    image: new URL("@/assets/images/contacts/instagram.jpg", import.meta.url),
    name: 'Instagram',
    text: 'https://instagram.com/alina92_nails',
    link: true
  }
])
const linkText = (item) => {
  return item.name === 'Instagram'

}
</script>

<template>
  <div class="contacts">
    <div class="contacts__h1">
      <h1>Контакты</h1>
    </div>
    <div class="contacts__container">
      <div class="contacts__card" v-for="(item, index) in contentCards" :key="index">
        <div class="contacts__card-img">
          <img :src="item.image" alt="img">
        </div>
        <div class="contacts__card-name">
          <h3>{{ item.name }}</h3>
        </div>
        <div :class="['contacts__card-text',{'contacts__link': item.text.startsWith('http')}]">
          <a v-if="linkText(item)" :href="item.text">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>

        </div>
      </div>
    </div>
  </div>
</template>
<!--<div class="contacts__card-text">-->
<!--<a v-if="linkText(item)" :href="item.text">{{ item.text }}</a>-->
<!--<span v-else>{{ item.text }}</span>-->

<!--</div>-->
<style scoped lang="scss">
@import "@/assets/scss/color";

.contacts {
  width: 100%;

  &__h1 {
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: $color-header;
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase; /* Пример применения верхнего регистра */
    letter-spacing: 4px; /* Пример добавления интервала между буквами */
    text-shadow: 5px 6px 4px rgba(0, 0, 0, 1); /* Тень текста (горизонтальное смещение, вертикальное смещение, размытие тени, цвет тени) */
  }

  &__container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    box-sizing: border-box;

  }

  &__card {
    display: flex;
    height: min-content;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: max-content;
    word-break: break-all;
    gap: 0.3rem;
    //border: 6px solid #ccb6b6;

    //border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 1);
    //background-color: #fff;
    transition: transform 0.2s;
    //box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 1), 0 -2px 4px 0 rgb(128, 18, 222), inset 0 0 10px rgb(128, 18, 222);


  }

  &__card-img {
    max-width: 100px;
  }

  &__card-name {

  }

  &__card-text {
    max-width: max-content;
    color: black;

  }

  &__link {
    color: black;

    &:hover {
      box-shadow: inset 0 0 10px rgb(216, 200, 231);
    }
  }
}

</style>

