<template>
  <div class="">
    <div class="text-h6">Mails</div>
    <div class="row q-col-gutter-sm">
      <ProductElement
        v-for="prod of store.products"
        :key="prod.id"
        :prod="prod"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useProductsStore } from 'src/stores/products/ProductsStore';
export default defineComponent({
  name: 'CatalogPage',
  setup() {
    const store = useProductsStore();
    console.log(store.products);
    return { store };
  },
});
</script>
