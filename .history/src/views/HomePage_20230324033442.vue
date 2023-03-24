<template>
  <div class="min-h-screen w-full grid grid-cols-1 jusity-center text-center content-center">
    <span class="text-sm m-0">Selamat datang di</span>
    <h1 class="text-2xl m-0 font-bold text-primary">Synorgan App</h1>
  </div>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
