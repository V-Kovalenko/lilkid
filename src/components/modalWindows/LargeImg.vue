<script setup>
const emit = defineEmits(['close'])
const props = defineProps({
  image: {
    type: Object,
    required: true,
    default: {}
  }
})
const zoomImageCLose = () => {
  emit('close')
}
</script>

<template>
  <div class="large" >
    <div class="large__content">
      <img :src="props.image.url" alt="props" class="large__img">
      <span  class="zoomImageClose" @click="zoomImageCLose">X</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.large {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 160vh;
  min-height: min-content;
  top: 0;
  left: 0;
  background-color: #eed0d0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    width: 100%;
    height: 100%;

  }
  &__img {
    width: 100%;
    object-fit: contain;
    top: 0;
    left: 0;
    right: 0;
    z-index: 15;
    cursor: auto;
  }
}
.zoomImageClose {
  position: absolute;
  top: 40px;
  right: 160px;
  font-size: 40px;
  border-radius: 1rem;
  border: 1px solid black;
  padding: 5px 1rem;
  background-color: #eab0b0;
  z-index: 15;
  cursor: pointer;
}
</style>
