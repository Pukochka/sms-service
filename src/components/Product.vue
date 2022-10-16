<template>
  <div class="col-12 col-sm-6 col-md-4">
    <q-card class="product-card flex q-pa-sm">
      <div class="img q-pa-lg bg-grey-7 rounded-borders border-r-1"></div>
      <div class="q-pl-md">
        <div class="text-h6">{{ prod.title }}</div>
        <div class="">{{ prod.desc }}</div>
      </div>
    </q-card>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { Product } from 'src/stores/products/models';

export default defineComponent({
  name: 'ProductElement',
  props: {
    prod: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.border-r-1 {
  border-radius: 4px !important;
}
.border-r-10 {
  border-radius: 10px !important;
}
</style>
