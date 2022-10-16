import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Product } from './models';

export const useProductsStore = defineStore({
  id: 'ProductsStore',
  state: () =>
    ref({
      products: [
        {
          title: '123',
          desc: 'lorem ipsum',
          id: 1,
        },
        {
          title: '56745',
          desc: 'lorem ipsum',
          id: 2,
        },
        {
          title: '4654',
          desc: 'lorem ipsum',
          id: 3,
        },
      ] as Product[],
    }),
  getters: {
    ViewProducts: (state) => state.products,
  },
  actions: {},
});
