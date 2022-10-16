import { defineStore } from 'pinia';
import { ref } from 'vue';
import { MainStore } from './models';

export const useMainStore = defineStore({
  id: 'MainStore',
  state: () =>
    ref({
      tabs_state: 'catalog',
    } as MainStore),
  getters: {
    Tabs: (state) => state.tabs_state,
  },
  actions: {
    ChangeTab(section: string) {
      this.tabs_state = section;
    },
  },
});
