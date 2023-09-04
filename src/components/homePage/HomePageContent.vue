<script setup>
import {onBeforeMount, onMounted, ref} from "vue";
import NoveltiesGirl from "@/components/novelties/NoveltiesGirls.vue";
import NoveltiesBoys from "@/components/novelties/NoveltiesBoys.vue";
import AboutProduct from "@/components/modalWindows/AboutProduct.vue";
import {useItemNovelties} from "@/stores/ItemsNovelties";
import LargeImg from "@/components/modalWindows/LargeImg.vue";
import AddProduct from "@/components/modalWindows/ProductAddedToBasket.vue";

const noveltiesItem = useItemNovelties()
const modalWindowToggle = ref(false)


const zoomImage = (item) => {     //Открыть увеличенное фото
  item.photoSize = !item.photoSize
}

const zoomImageCLose = (item) => {      //Закрыть увеличенное фото
  if (item.photoSize) {
    item.photoSize = !item.photoSize
  }
}

/*-------open modal window-----*/
const changeToggleAboutProduct = () => {
  modalWindowToggle.value = !modalWindowToggle.value
}
/*-------close modal window-----*/
const closeModalWindow = () => {
  modalWindowToggle.value = !modalWindowToggle.value
}
/*-------close modal window on Esc-----*/
onMounted(() => {
  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      closeModalWindow()
    }
  }
  document.addEventListener('keydown', handleEscKey)

  onBeforeMount(() => {
    document.removeEventListener('keydown', handleEscKey)
  })
})
/*ДОБАВЛЕНИЕ ВКОРЗИНУ---<<<<*/
const addToBasketProducts = (product) => {
  noveltiesItem.getBasketProducts(product)
}

const addSizeProductsToBasket = (size) => {  // добавление в корзину размера при клике на кнопки размеров в
  noveltiesItem.selectedPhotoId.selectedSize = size    // в компоненте aboutProduct
  console.log('4444:', size)
}
/*-----ДОБАВЛЕНИЕ ВКОРЗИНУ--->>>>---*/
const isActive = ref(null)
/*--ДОБАВЛЕНИЕ КЛАССА ACTIVE КНОПКАМ SIZE--->>>>*/
const handleActiveButtonSize = (index) => {
  isActive.value = index
}
const multiFunctionsFromAbout = (size, index) => {
  handleActiveButtonSize(index)
  addSizeProductsToBasket(size, index)
  // noveltiesItem.getSizeFromButtonSize(size, index)
}
/*---ИТЕРИРОВАНИЕ МАССИВА РАЗМЕРОВ в aboutProduct----->>>>*/
function getFormattedSize() {
if (noveltiesItem.selectedPhotoId) {
  return noveltiesItem.selectedPhotoId.size.map(it => it.size)
}
}
/*---ИТЕРИРОВАНИЕ МАССИВА РАЗМЕРОВ aboutProduct-----<<<<<*/


</script>

<template>
  {{getFormattedSize()}}
  <div class="novelties">
    <div class="novelties__header">
      <h1 class="novelties__h1">Новинки</h1>
    </div>

    <!--    @addToBasket="noveltiesItem.getBasketProducts(noveltiesItem.selectedPhotoId)"-->

    <AboutProduct
        v-if="modalWindowToggle"
        @emitCloseModalWindow="closeModalWindow"
        @addToBasket="addToBasketProducts(noveltiesItem.selectedPhotoId)"
    >

      <template #title>{{ noveltiesItem.selectedPhotoId.title }}</template>
      <template #description><h4>Описание: </h4>{{noveltiesItem.selectedPhotoId.description}}</template>
      <template #size>
        <h4 style="display: inline">Размер: </h4>
<!--        <span>{{getFormattedSize(noveltiesItem.selectedPhotoId.size)}}</span>-->
        <button
            :class="['novelties__aboutProduct-btn-size',{'novelties__aboutProduct-btn-active': isActive === index}]"
            v-for="(size,index) in getFormattedSize()"
            @click="multiFunctionsFromAbout(size, index)"
            :key="index"
        >
          {{size}}
        </button>
      </template>

      <template #price>
        <h4 style="display: inline">Цена: </h4>
        <span>{{ noveltiesItem.selectedPhotoId.price }} {{ noveltiesItem.selectedPhotoId.unit }}</span>
      </template>
      <!--      :class="image.photoSize? 'novelties__img novelties__img_info': 'novelties__img'"-->
      <template #img>
        <div v-for="image in noveltiesItem.selectedPhotoId.novelties.arrNovelties" :key="image.url"

        >

          <img :src="image.url" alt="image.url"
               class="novelties__img"
               @click="zoomImage(image)"
          />
          <LargeImg
              v-show="image.photoSize"
              :image="image"
              @close="zoomImageCLose(image)"
          />

        </div>
      </template>
    </AboutProduct>
    <div class="novelties__all">
      <NoveltiesBoys @emitChangeToggleAboutProduct="changeToggleAboutProduct"/>
      <NoveltiesGirl @changeToggleAboutProduct="changeToggleAboutProduct"/>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/color";

.novelties {
  width: 100%;

  &__header {
    display: flex;
    justify-content: center;
  }

  &__h1 {
    font-family: 'Montserrat', sans-serif; /* Замените 'Montserrat' на имя шрифта, который вы хотите использовать */
    font-size: 4rem; /* Размер шрифта */
    font-weight: bold; /* Толщина шрифта (bold - жирный, normal - обычный) */
    color: $color-header; /* Цвет текста заголовка */
    //text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Тень текста (горизонтальное смещение, вертикальное смещение, размытие тени, цвет тени) */
    letter-spacing: 4px; /* Расстояние между буквами */
    text-transform: uppercase; /* Преобразование текста в верхний регистр */
    line-height: 1.2; /* Высота строки */
    text-align: center; /* Выравнивание текста (left - слева, center - по центру, right - справа) */
    margin-bottom: 4rem;
    //box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 1), 0 -2px 4px 0 rgb(128, 18, 222);
    width: min-content;
    padding: 0.2rem 2rem;
    text-shadow: 5px 6px 4px rgba(0, 0, 0, 1); /* Тень текста (горизонтальное смещение, вертикальное смещение, размытие тени, цвет тени) */

  }

  &__all {
    display: flex;
    row-gap: 20px;
    column-gap: 3rem;
    justify-content: space-between;
    text-align: center;
  }

  &__price {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__girls {
    box-sizing: border-box;
    //background-color: #d86eee;
    border-radius: 2rem;
    width: 50%;
    padding: 1rem;
    height: max-content;
    //box-shadow: 0 3px 12px rgba(0, 0, 0, 111);


  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__boys {

    //background-color: #ffffff;
    border-radius: 2rem;
    padding: 1rem;
    height: max-content;
    width: 50%;
    //box-shadow: 0 3px 12px rgba(0, 0, 0, 111);
  }

  &__content {
    padding: 1rem;
    width: max-content;
  }

  &__rows-content {
    display: flex;
  }

  &__img {

    max-width: 200px;
    border-radius: 2rem;
    margin: 1rem;
    //box-shadow: 0 6px 12px rgba(0, 0, 0, 111);
    //background-color: #000000;
    box-shadow: $shadow;


    &:hover {
      transform: translateY(-10px);
      transition: .3s;
    }
  }

  &__img_disabled {
    pointer-events: none;
    filter: blur(10px);
  }

  &__aboutProduct-btn-size {
    border-radius: .2rem;
    box-shadow: inset 0 0 0 1px #fff;
    border: 1px solid transparent;
    padding: 3px;
    margin-right: 3px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      border: 1px solid #cb11ab;
      box-shadow: inset 0 0 0 1px #cb11ab;

    }
  }
  &__aboutProduct-btn-active {
    border: 2px solid #cb11ab;
    box-shadow: inset 0 0 0 1px #cb11ab;

  }


}


</style>
