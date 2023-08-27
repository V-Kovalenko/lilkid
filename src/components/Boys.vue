<script setup>
import Catalog from "@/components/catalog/Catalog.vue";
</script>

<template>
  <div class="boys">
    <Catalog
        :title="'Каталог для мальчиков'"
    />
  </div>
</template>

<style scoped lang="scss">
.boys {
  display: flex;
}
</style>