<script setup>
import ToolTips from "@/components/ToolTips.vue";
import {useItemNovelties} from "@/stores/ItemsNovelties";
import Buttons from "@/components/ui/Buttons.vue";

const noveltiesItem = useItemNovelties()
const emit = defineEmits(['changeToggleAboutProduct'])


const emitChangeToggleAboutProduct = () => {
  emit('changeToggleAboutProduct')
}
</script>

<template>
  <div class="novelties__girls">
    <h2 class="novelties__h2">Для девочек</h2>
    <div class="novelties__container">
      <div
          class="novelties__content"
          v-for="image in noveltiesItem.itemNoveltiesGirls"
          :key="image.id"
      >
        <div
            v-bind="$attrs"
            @mouseover="noveltiesItem.showTooltip(image)"
            @mouseleave="noveltiesItem.hideTooltip"
            :key="image.id"
        >
          <!--          <RouterLink :to="`/product/${image.id}`">-->
          <!--          </RouterLink>-->

          <img :src="image.novelties.url" alt="photo" class="novelties__img">


          <div class="novelties__price">
            <div @click="emitChangeToggleAboutProduct">
              <Buttons btnTitle="Подробно" class="btn__show" @click="noveltiesItem.getIdPhoto(image)"/>
            </div>

            <p class="novelties__price">{{ image.price }} {{ image.unit }}</p>
          </div>
          <ToolTips
              :image="image.size"
              :class="!noveltiesItem.showTooltipClass? 'tooltip' : 'tooltip_show '"
              v-show="noveltiesItem.showItemId === image.id"
          />
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped lang="scss">
.novelties {
  &__h2 {
    text-shadow: 1px 1px 16px rgba(0, 0, 0, 1);
  }
  &__price {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .btn__show {
    width: min-content;
    padding: 5px;
    font-size: 1rem;
  }
}
</style>