<template>
  <ion-page>
    <ion-content>
      <ion-router-outlet :transition="'my-transition'"></ion-router-outlet>
      <div class="min-h-screen w-full grid grid-cols-1 jusity-center text-center content-center bg-primary">
        <div class="w-1/2 mx-auto" v-show="showSplash">
          <img id="image_splashscreen" src="assets/splashscreen.svg" class="image-splashscreen" alt="">
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'

export default defineComponent({
  components: {
    IonPage, IonContent
  },
  data() {
    return {
      showSplash: true
    }
  },
  mounted() {
    setTimeout(() => {
      const image_splashscreen = document.getElementById('image_splashscreen')
      if (image_splashscreen) image_splashscreen?.classList.add('hide')
      const itemsString = localStorage.getItem('user');
      if (itemsString) {
        this.$router.push({name: 'DashboardPage', replace: true})
      } else {
        this.$router.push({name: 'StartPage', replace: true})
      }
    }, 3000)
  }
})
</script>

<style scoped>
.image-splashscreen {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

.image-splashscreen {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.hide {
  animation-name: fade-out !important;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

/* Define the custom transition */
.my-transition {
  transition: transform 0.5s ease-out;
}

/* Apply the custom transition to the ion-router-outlet component */
ion-router-outlet {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform-origin: left;
  transform: translateX(0);
}

.my-transition-enter-active ion-router-outlet {
  transform: translateX(100%);
}

.my-transition-leave-active ion-router-outlet {
  transform: translateX(-100%);
}
</style>

