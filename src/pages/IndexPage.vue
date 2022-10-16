<template>
  <q-page class="row items-center justify-evenly">
    <q-tab-panels
      v-model="MainStore.Tabs"
      animated
      transition-duration="200"
      class="full-width h-ingerit"
    >
      <q-tab-panel name="catalog">
        <CatalogPage />
      </q-tab-panel>

      <q-tab-panel name="order">
        <OrderPage />
      </q-tab-panel>

      <q-tab-panel name="profile">
        <ProfilePage />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMainStore } from 'src/stores/main/MainStore';
export default defineComponent({
  name: 'IndexPage',

  setup() {
    const MainStore = useMainStore();
    return { MainStore };
  },
});
</script>
