<template>
  <div class="min-h-screen w-full grid grid-cols-1 jusity-center text-center content-center bg-primary">
    <div class="w-1/2 mx-auto" v-show="showSplash">
      <img id="image_splashscreen" src="assets/splashscreen.svg" class="image-splashscreen" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      showSplash: true
    }
  },
  mounted() {
    setTimeout(() => {
      let image_splashscreen = document.getElementById('image_splashscreen')
      image_splashscreen?.classList.add('hide')
    }, 3000)
  }
})
</script>

<style scoped>
/* Style the logo image */
.image-splashscreen {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

/* Define the animation */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Apply the animation to the logo image */
.image-splashscreen {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.hide {
  transition: all 2s ease-in-out;
  opacity: 0;
}
</style>