<template>
  <q-layout view="lHh lpR fFf">
    <q-header bordered class="bg-transparent" height-hint="98">
      <q-toolbar>
        <!-- <q-btn color="grey-7" icon="arrow_back" unelevated flat /> -->
        <q-btn
          @click="DrawerState = !DrawerState"
          color="grey-7"
          icon="menu"
          unelevated
          flat
          round
        />
        <div class="text-h6 q-pl-md text-grey-7">WebSmsBot</div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="DrawerState" side="left" behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-transparent" height-hint="98"
      ><div class="row">
        <q-btn
          color="grey-7"
          icon="person"
          unelevated
          flat
          class="col"
          label="Профиль"
          no-caps
          size="12px"
          stack
          @click="ChangeTab('catalog')"
        />
        <q-btn
          color="grey-7"
          icon="account_balance_wallet"
          unelevated
          flat
          class="col"
          label="Баланс"
          stack
          size="12px"
          @click="ChangeTab('order')"
          no-caps
        />
        <q-btn
          color="grey-7"
          icon="list_alt"
          unelevated
          flat
          class="col"
          no-wrap
          no-caps
          stack
          size="12px"
          @click="ChangeTab('profile')"
          label="Мои заказы"
        />
      </div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useMainStore } from 'src/stores/main/MainStore';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const DrawerState = ref(false);
    const { ChangeTab } = useMainStore();

    return { DrawerState, ChangeTab };
  },
});
</script>
