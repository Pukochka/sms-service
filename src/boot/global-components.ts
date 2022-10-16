import CatalogPage from 'src/pages/CatalogPage.vue';
import OrderPage from 'src/pages/OrderPage.vue';
import ProfilePage from 'src/pages/ProfilePage.vue';
import Product from 'src/components/Product.vue';
import { boot } from 'quasar/wrappers';

export default boot(async ({ app }) => {
  [CatalogPage, OrderPage, ProfilePage, Product].forEach((c) =>
    app.component(c.name, c)
  );
});
