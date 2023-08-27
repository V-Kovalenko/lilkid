<script setup>
import {useItemNovelties} from "@/stores/ItemsNovelties";

const noveltiesItem = useItemNovelties()
const props = defineProps({
  title: {
    type: String
  },
})

const emit = defineEmits(['clickItemAside'])
const clickEmitItemAside = () => {
  emit('clickItemAside')

}
</script>

<template>
  <li class="aside__navigation-item" @click="clickEmitItemAside">
    {{ props.title }}
  </li>
</template>

<style scoped lang="scss">
@import "@/assets/scss/color";

.aside__navigation-item {
  &:hover {
    cursor: pointer;
    background-color: $color-hover;

  }
}
</style>