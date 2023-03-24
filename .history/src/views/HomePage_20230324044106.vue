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
      const image_splashscreen = document.getElementById('image_splashscreen')
      image_splashscreen?.classList.add('hide')
    }, 3000)
    setTimeout(() => {
      this.gotoStart()
    }, 3500)
  },
  methods: {
    gotoStart() {
      this.$router.push('/start')
    }
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

/* Apply the animation to the logo image */
.image-splashscreen {
  animation-name: fade-in;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.hide {
  animation-name: fade-out !important;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
</style>