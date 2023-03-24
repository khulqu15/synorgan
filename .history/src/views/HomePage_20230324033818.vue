<template>
  <div class="min-h-screen w-full grid grid-cols-1 jusity-center text-center content-center">
    <div class="w-1/2 mx-auto p-4 shadow-xl rounded-xl">
      <span class="text-xs m-0">Selamat datang di</span>
      <h1 class="text-2xl m-0 font-bold text-primary">Synorgan</h1>
      <h2 class="m-0 text text-sm">Belajar bersama dokter SiO</h2>
    </div>
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
