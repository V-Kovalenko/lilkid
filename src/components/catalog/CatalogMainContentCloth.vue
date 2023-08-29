<script setup>
import {onBeforeMount, onMounted, ref} from "vue";
import CatalogMainProducts from "@/components/catalog/CatalogMainProducts.vue";
import {useItemNovelties} from "@/stores/ItemsNovelties";
import AboutProduct from "@/components/modalWindows/AboutProduct.vue";
import LargeImg from "@/components/modalWindows/LargeImg.vue";

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

const selectedProductMainContent = ref(null)
const modalWindowToggle = ref(false)
const getImageCatalogMainProducts = (product) => {
  selectedProductMainContent.value = product
}

const openModalWindow = () => {
  modalWindowToggle.value = !modalWindowToggle.value
}
const closeModalWindow = () => {
  modalWindowToggle.value = !modalWindowToggle.value
}
const zoomImageCLose = (item) => {
  if (item.photoSize) {
    item.photoSize = !item.photoSize
  }
}

const zoomImageOpen = (item) => {
  item.photoSize = !item.photoSize
}

function emitFunctions(product) {
  getImageCatalogMainProducts(product)
  openModalWindow()
}

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
</script>

<template>
  <div class="catalogMainContentCloth">
    <AboutProduct
        v-if="modalWindowToggle"
        @closeModalWindow="closeModalWindow"
        class="catalogMainContentCloth__aboutProduct"
    >

      <template #title>{{ selectedProductMainContent.title }}</template>
      <template #size>
        <h4 style="display: inline">Размер в наличии: </h4>
        <span>{{ selectedProductMainContent.size.join(' ,') }}</span>
      </template>
      <template #price>
        <h4 style="display: inline">Цена: </h4>
        <span>{{ selectedProductMainContent.price }} {{ selectedProductMainContent.unit }}</span>
      </template>
      <!--      :class="image.photoSize? 'novelties__img novelties__img_info': 'novelties__img'"-->
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
        @product=emitFunctions(product)

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
  //height: 10vh;
  &__aboutProduct {
  }

  //&__img {
  //  box-shadow: $shadow;
  //}
}
</style>