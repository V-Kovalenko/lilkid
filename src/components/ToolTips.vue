<script setup>
import {ref} from "vue";

const props = defineProps({
  image: {
    type: Array,
    required: true
  }
})
const size = ref(props.image.join(', '))
/*---ИТЕРИРОВАНИЕ МАССИВА РАЗМЕРОВ----->>>>*/
function getFormattedSize() {
  return props.image.map(it => it.size).join(', ')
}
/*---ИТЕРИРОВАНИЕ МАССИВА РАЗМЕРОВ-----<<<<<*/
</script>

<template>
  <div class="tooltip">
    Размеры: {{ getFormattedSize() }}
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/color";

.tooltip {
  background: $background-color;
  border: 1px solid black;
  border-radius: 1rem;
  opacity: 0;
  font-weight: 600;
}

.tooltip_show {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  height: min-content;
  text-align: center;


}
</style>