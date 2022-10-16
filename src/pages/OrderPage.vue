<template>
  <div class="text-h6">Alarms</div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'OrderPage',
  setup() {
    const WebApp = () => computed(() => window.Telegram);
    return {};
  },
});
</script>
