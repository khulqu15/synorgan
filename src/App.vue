<template>
  <ion-app>
    <div style="display: none;">
      <audio ref="audio" volume="0.6" src="sound/backsound.mp3" autoplay loop></audio>
    </div>
    <ion-router-outlet :key="routerViewKey"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      is_playing: false
    }
  },
  components: {
    IonApp, IonRouterOutlet
  },
  beforeRouteUpdate() {
    this.playMusic()
  },
  beforeRouteLeave() {
    this.playMusic()
  },
  mounted() {
    document.addEventListener('click', this.playMusic)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.playMusic)
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
  methods: {
    playMusic() {
      setTimeout(() => {
        const firstPage = ['HomePage', 'IntroPage', 'IntroSuccessPage', 'StartPage']
        const audio = this.$refs.audio as HTMLAudioElement
        if(audio) {
          if(!firstPage.includes(this.$route.name as string) && !this.is_playing) {
            this.is_playing = true
            audio.play()
          } else if(firstPage.includes(this.$route.name as string) && this.is_playing) {
            audio.currentTime = 0
            this.is_playing = false
            audio.pause()
          }
        }
      }, 500);
    }
  }
});
</script>
