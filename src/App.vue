<template>
  <ion-app>
    <ion-router-outlet :key="routerViewKey"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IonApp, IonRouterOutlet
  },
  setup() {
    const routerViewKey = ref(0);
    return { routerViewKey };
  },
  watch: {
    $route() {
      this.routerViewKey += 1;
    },
  },
});
</script>
