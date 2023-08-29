<script setup>
import ToolTips from "@/components/ToolTips.vue";
import {useItemNovelties} from "@/stores/ItemsNovelties";
import Buttons from "@/components/ui/Buttons.vue";

const props = defineProps({
  modalWindowToggle: {
    type: Boolean
  },
})
const emit = defineEmits(['emitChangeToggleAboutProduct'])
const emitChangeToggleAboutProduct = () => {
  emit('emitChangeToggleAboutProduct')
}
const noveltiesItem = useItemNovelties()
</script>

<template>
  <div class="novelties__boys">
    <h2 class="novelties__h2">Для мальчиков</h2>
    <div class="novelties__container">
      <div class="novelties__content" v-for="(image, index) in noveltiesItem.itemNoveltiesBoys"

      >
        <!--        появление tooltip при наведении на картинки >>>>>>>-->
        <div
            @mouseover="noveltiesItem.showTooltip(image)"
            @mouseleave="noveltiesItem.hideTooltip()"
        >
          <!--        появление tooltip при наведении на картинки <<<<<<-->

          <!--          <RouterLink :to="`/product/${image.id}`">-->
          <!--          </RouterLink>-->
          <img :src="image.novelties.url" alt="photo" class="novelties__img">
          <div class="novelties__price">
            <div @click="emitChangeToggleAboutProduct">
              <Buttons btnTitle="Подробно" class="btn__show" @click="noveltiesItem.getIdPhoto(image)"/>
            </div>
            <span>{{ image.price }} {{ image.unit }}</span>
          </div>
          <ToolTips
              :image="image.size"
              v-show="noveltiesItem.showItemId === image.id"
              :class="!noveltiesItem.showTooltipClass? 'tooltip' : 'tooltip_show '"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.novelties__boys {
  box-sizing: border-box;

  .novelties__h2 {
    text-shadow: 1px 1px 16px rgba(0, 0, 0, 1);
  }

  .novelties__price {
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