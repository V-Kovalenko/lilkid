<script setup>
import {ref} from 'vue'
import CatalogMainContentShoes from "@/components/catalog/CatalogMainContentShoes.vue";
import AsideNavigationItem from "@/components/aside/AsideNavigationItem.vue";
import {useItemNovelties} from "@/stores/ItemsNovelties";

const novelties = useItemNovelties()
const props = defineProps({
  path: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['asideItem'])

// const navItems = ref([
//   {main:'Одежда',title: 'Костюмы', component: 'CatalogMainContentCloth', toggleNavigation: true},
//   {main:'Обувь' ,title: 'Сандали', component: 'CatalogMainContentShoes', toggleNavigation: true}
// ])
const navItems = ref([
  {
    main: 'Одежда',
    toggleNavigation: true,
    items: [
      {
        title: 'Костюмы',
        component: 'CatalogMainContentCloth'
      }
    ]
  },
  {
    main: 'Обувь',
    toggleNavigation: false,
    items: [
      {
        title: 'Сандали',
        component: 'CatalogMainContentShoes',
      }
    ]
  }
])

const changeToggleNavigation1 = (component) => {
  console.log('component: ', component)
  component.toggleNavigation = !component.toggleNavigation
}

const selectedItem = ref(null)
const changeSelectedItem = (nameComponent) => {
  console.log('nameComponent: ', nameComponent.items[0].component)
  selectedItem.value = nameComponent.items[0].component
}

function onClickNavAsideItem(item) {
  changeSelectedItem(item)
}

const sendEmit = () => {
  emit('asideItem', selectedItem.value)
}
</script>
<!--<RouterLink-->
<!--    v-for="item in navItems"-->
<!--    :to="item.path"-->
<!--    :key="item.path"-->
<!--    class="aside__navigation-link"-->
<!--    v-show="toggleNavigation"-->
<!--&gt;-->
<!--<ul>-->
<!--  <li>-->
<!--    {{item.title}}-->
<!--  </li>-->
<!--</ul>-->
<!--</RouterLink>-->
<!--v-show="item.main === 'Одежда'"-->
<template>
  <div class="aside" @click="sendEmit">
    <div class="aside__content" v-for="(item, index) in navItems">
      <div class="aside__title-btn" @click="changeToggleNavigation1(item)">
        <h2 class="aside__h2">{{ item.main }}</h2>
        <span class="material-icons" v-if="!item.toggleNavigation">expand_less</span>
        <span class="material-icons" v-else>expand_more</span>
      </div>
      <div class="aside__navigation" v-if="item.toggleNavigation">
        <ul>
          <AsideNavigationItem
              v-for="(title, index) in item.items"
              :key="index"
              :title="title.title"
              @clickItemAside='onClickNavAsideItem(item)'
          />
        </ul>
      </div>
    </div>

    <!--    <div  class="aside__content" v-show="item.main === 'Обувь'" v-for="item in navItems">-->
    <!--      <div  class="aside__title-btn" @click="changeToggleNavigation1(item)">-->
    <!--        <h2   class="aside__h2"  >{{item.main}}</h2>-->
    <!--        <span  class="material-icons" v-if="!item.toggleNavigation">expand_less</span>-->
    <!--        <span  class="material-icons" v-if="item.toggleNavigation">expand_more</span>-->
    <!--      </div>-->
    <!--      <div class="aside__navigation" v-if="item.toggleNavigation">-->
    <!--        <ul>-->
    <!--          <AsideNavigationItem-->
    <!--              v-for="(item, index) in navItems"-->
    <!--              :key="index"-->
    <!--              :title="item.title"-->
    <!--              :component="item.component"-->
    <!--              :main="item.main"-->
    <!--              v-show="item.main === 'Обувь'"-->
    <!--              @clickItemAside='onClickNavAsideItem(item)'-->
    <!--          />-->
    <!--        </ul>-->
    <!--      </div>-->
    <!--    </div>-->

  </div>
</template>
<style scoped lang="scss">
@import "@/assets/scss/color";

.aside {
  //background-color: $background-color;
  margin-right: 1rem;
  width: 300px;

  &__content {
  }

  &__title-btn {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  &__h2 {
    &:hover {
      text-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
    }
  }

  &__navigation {
    display: flex;
    flex-direction: column;
  }

  &__navigation-item {
    &:hover {
      cursor: pointer;
      //background-color: $color-hover;
      background: $background-color-aside-hover;

    }
  }

}
</style>