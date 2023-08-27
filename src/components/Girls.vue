<script setup>
import Catalog from "@/components/catalog/Catalog.vue";
</script>

<template>
  <div class="girls">
    <Catalog
      :title="'Каталог для девочек'"
    />
  </div>
</template>

<style scoped lang="scss">
.girls {
  display: flex;
}
</style>