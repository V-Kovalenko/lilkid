<script setup>
import {ref} from "vue";
import Aside from "@/components/aside/Aside.vue";
import Buttons from "@/components/ui/Buttons.vue";
import CatalogMainContentCloth from "@/components/catalog/CatalogMainContentCloth.vue";
import CatalogMainContentShoes from "@/components/catalog/CatalogMainContentShoes.vue";
import {useItemNovelties} from "@/stores/ItemsNovelties";
import {useRoute} from "vue-router";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
})


const novelties = useItemNovelties()

/*----В зависимости от url открывается компонент--->>>>*/
const route = useRoute()
const categoriesCatalog = ref(novelties.getItemsByCategories(route.fullPath))
const beginCategoriesCatalog = ref([...categoriesCatalog.value])
console.log('beginCategoriesCatalog: ,', beginCategoriesCatalog)
/*----В зависимости от url открывается компонент---<<<<*/


/*-----data for sort---->>>>>*/
const sortItemData = ['Сбросить', 'По возрастанию цены', 'По убыванию цены']
const toggleSortItem = ref(false)
const openCloseSort = () => {
  toggleSortItem.value = !toggleSortItem.value
}
const closeSort = () => {
  toggleSortItem.value = false
}

const sortProducts = (item) => {
  if (item === 'По возрастанию цены') {
    return categoriesCatalog.value.sort((a, b) => a.price - b.price)
  } else if (item === 'По убыванию цены') {
    return categoriesCatalog.value.sort((a, b) => b.price - a.price)
  } else if (item === 'Сбросить') {
    return categoriesCatalog.value.sort((a, b) => a.id - b.id)
  }

}
/*-----data for sort----<<<<<<*/
const dataNameComponentFromAside = ref(null)
const handleContentCatalog = (emit1) => {
  dataNameComponentFromAside.value = emit1
}


</script>

<template>
  <div class="wrapper__catalog" @click.self="closeSort">
    <div class="catalog" @click.self="closeSort">
      <div class="catalog__toolbar">
        <h2 class="catalog__h2">{{ props.title }}</h2>
        <div class="catalog__sort">
          <Buttons
              :btnDefault="true"
              :btn-title="'Сортировать'"
              @click="openCloseSort"
              class="btn__sort"
          />
          <div v-show="!toggleSortItem" class="material-icons">expand_less</div>
          <div v-show="toggleSortItem" class="material-icons">expand_more</div>
          <ul v-show="toggleSortItem" class="catalog__sort-ul">
            <li class="catalog__sort-li" v-for="sort in sortItemData" @click="sortProducts(sort)">
              {{ sort }}
            </li>
          </ul>
        </div>

      </div>
      <main class="catalog__main">
        <CatalogMainContentCloth
            v-if="dataNameComponentFromAside === null || dataNameComponentFromAside === 'CatalogMainContentCloth'"
            :itemAll="categoriesCatalog"
            :sortProducts="beginCategoriesCatalog"

        />
        <CatalogMainContentShoes v-if="dataNameComponentFromAside === 'CatalogMainContentShoes'"/>
      </main>
      <aside class="catalog__aside">
        <Aside @asideItem="handleContentCatalog"/>
      </aside>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import "@/assets/scss/color";

.catalog {
  flex-grow: 1;
  display: grid;
  grid-template-areas:
      'tool tool'
      'aside main';
  //grid-template-columns: 1fr auto;
  //grid-template-rows: auto 1fr;

  &__toolbar {
    display: flex;
    grid-area: tool;
    margin-bottom: 1rem;
    justify-content: start;
    align-items: center;
  }

  &__h2 {
    margin-right: 1rem;
  }

  &__sort {
    display: flex;
    font-size: 0.8rem;
    position: relative;
    padding: 0.3rem;
    margin-left: 1rem;
  }

  &__sort-ul {
    position: absolute;
    top: 35px;
    right: 0;
    left: 2px;
    border: 1px solid black;
    background-color: $background-color;
    padding: 0.2rem;


  }

  &__sort-li {
    width: max-content;
    padding: 0.2rem 0.2rem;


    &:hover {
      background: $background-color;
      cursor: pointer;
      width: 100%;
    }
  }


  &__main {
    display: flex;
    grid-area: main;
    height: max-content;
    justify-content: start;

  }

  &__aside {
    max-width: 300px;
    //border-right: 1px solid black;
    height: max-content;
  }
}

.btn__sort {
  padding: 0 1rem;
}

.wrapper__catalog {
  width: 100vw;
  height: 100vh;
}
</style>