<script setup>
import {onBeforeMount, onMounted, ref} from "vue";
import CatalogMainProducts from "@/components/catalog/CatalogMainProducts.vue";
import {useItemNovelties} from "@/stores/ItemsNovelties";
import AboutProduct from "@/components/modalWindows/AboutProduct.vue";
import LargeImg from "@/components/modalWindows/LargeImg.vue";
import Buttons from "@/components/ui/Buttons.vue";
import AddProduct from "@/components/modalWindows/ProductAddedToBasket.vue";
import ProductAddedToBasket from "@/components/modalWindows/ProductAddedToBasket.vue";

const noveltiesItem = useItemNovelties()
const props = defineProps({
  itemAll: {
    type: Object,
  },
  sortProducts: {
    type: Object
  }
})

const emit = defineEmits(['emitSortProduct'])
const sendEmit = () => {
  emit('emitSortProduct')
}
/*--ДАННЫЕ ЭЛЕМЕНТА -->>>>>*/
const selectedProductMainContent = ref(null)
/*--ДАННЫЕ ЭЛЕМЕНТА -- <<<<<*/

const modalWindowToggle = ref(false)
/*--ПОЛУЧЕНИЕ ЭЛЕМЕНТА -->>>>*/
const getImageCatalogMainProducts = (product) => {
  selectedProductMainContent.value = product
}
/*--ПОЛУЧЕНИЕ ЭЛЕМЕНТА --<<<<*/

/*---ИТЕРИРОВАНИЕ МАССИВА РАЗМЕРОВ-----<<<<<*/

/*--ОТКРЫТЬ И ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО ABOUT-PRODUCT-->>>>*/
const openModalWindow = () => {
  modalWindowToggle.value = !modalWindowToggle.value
}
const closeModalWindow = () => {
  modalWindowToggle.value = !modalWindowToggle.value
}
/*--ОТКРЫТЬ И ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО ABOUT-PRODUCT--<<<<*/

/*--УВЕЧИТЬ И ЗАКРЫТЬ ИЗОБРАЖЕНИЕ В МОДАЛЬНОМ ОКНЕ-->>>>*/
const zoomImageCLose = (item) => {
  if (item.photoSize) {
    item.photoSize = !item.photoSize
  }
}

const zoomImageOpen = (item) => {
  item.photoSize = !item.photoSize
}
/*--УВЕЧИТЬ И ЗАКРЫТЬ ИЗОБРАЖЕНИЕ В МОДАЛЬНОМ ОКНЕ--<<<<*/

/*-- ЗАКРЫТЬ МОАЛЬНОЕ ОКНО НА КНОПКУ ESCAPE-->>>>*/
onMounted(() => {
  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      modalWindowToggle.value = false
    }
  }
  document.addEventListener('keydown', handleEscKey)

  onBeforeMount(() => {
    document.removeEventListener('keydown', handleEscKey)
  })
})
/*-- ЗАКРЫТЬ МОАЛЬНОЕ ОКНО НА КНОПКУ ESCAPE--<<<<*/


/*---add to basket products --->>>>*/
const addToBasketProducts = (product) => {
 noveltiesItem.getBasketProducts(product)
}
/**/
const addSizeProductsToBasket = (size) => {  // добавление в корзину размера при клике на кнопки размеров в
  selectedProductMainContent.value.selectedSize = size    // в компоненте aboutProduct

}
/*add to basket products ---<<<*/

/*---ИТЕРИРОВАНИЕ МАССИВА РАЗМЕРОВ----->>>>*/
function getFormattedSize() { //получение выбранного размера каждого товара при добавлении в корзину
  return selectedProductMainContent.value.size.map((it) =>`${it.size}`)
}

/*--ДОБАВЛЕНИЕ КЛАССА ACTIVE КНОПКАМ SIZE--->>>>*/
const isActive = ref(null)
const handleActiveButtonSize = (index) => {
  isActive.value = index
}
const multiFunctionsFromAbout = (size, index) => {
  handleActiveButtonSize(index)
  addSizeProductsToBasket(size, index)
  // noveltiesItem.getSizeFromButtonSize(size, index)
}
/*--ДОБАВЛЕНИЕ КЛАССА ACTIVE КНОПКАМ SIZE---<<<<*/

</script>

<template>
  <div class="catalogMainContentCloth">
    <AboutProduct
        v-if="modalWindowToggle"
        @emitCloseModalWindow="closeModalWindow"
        class="catalogMainContentCloth__aboutProduct"
        @addToBasket="addToBasketProducts(selectedProductMainContent)"
    >

      <template #title>{{ selectedProductMainContent.title }}</template>
      <template #size >
        <h4 style="display: inline">Размер: </h4>
        <button
            :class="['catalogMainContentCloth__aboutProduct-btn-size',{'catalogMainContentCloth__aboutProduct-btn-active': isActive === index}]"
            v-for="(size,index) in getFormattedSize()"
            @click="multiFunctionsFromAbout(size,index)"
            :key="index"
        >
          {{size}}
        </button>
      </template>
      <template #price>
        <h4 style="display: inline">Цена: </h4>
        <span>{{ selectedProductMainContent.price }} {{ selectedProductMainContent.unit }}</span>
      </template>
      <!--      :class="image.photoSize? 'novelties__img novelties__img_info': 'novelties__img'"-->
      <template #description>
        <h4 style="display: inline">Описание: </h4>
        <span>{{selectedProductMainContent.description}}</span>
      </template>
      <template #img>
        <div v-for="image in selectedProductMainContent.products.arrProducts" :key="image.url"

        >

          <img :src="image.url" alt="image.url"
               class="novelties__img"
               @click="zoomImageOpen(image)"
          />
          <LargeImg
              v-show="image.photoSize"
              :image="image"
              @close="zoomImageCLose(image)"
          />
          <!--          @click="zoomImage(image)"-->


        </div>
      </template>
    </AboutProduct>

    <CatalogMainProducts
        v-for="product in itemAll"
        @product=getImageCatalogMainProducts(product)
        @click="openModalWindow"
    >
      <template #img>
        <img :src="product.products.url" alt="Photo" class="catalogMainContentCloth__img">
      </template>
      <template #price><b>Цена: </b>{{ product.price }} {{ product.unit }}</template>
      <template #description><b>Описание: </b>{{ product.products.description }}</template>
    </CatalogMainProducts>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/color";

.catalogMainContentCloth {
  display: flex;
  flex-wrap: wrap;

  &__aboutProduct {

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
    border: 1px solid #cb11ab;
    box-shadow: inset 0 0 0 1px #cb11ab;

  }
}

</style>