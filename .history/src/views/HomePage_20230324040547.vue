<template>
  <div class="min-h-screen w-full grid grid-cols-1 jusity-center text-center content-center bg-primary">
    <div class="w-1/2 mx-auto" v-show="showSplash">
      <img src="assets/splashscreen.svg" class="image-splashscreen" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const showSplash = ref(true)
    onMounted(() => {
      setTimeout(() => {
        showSplash.value = false
      }, 5000)
    })

    return showSplash
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
</style>