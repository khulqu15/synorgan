<template>
  <div class="relative inline-block">
    <div class="overflow-hidden rounded-full w-24 h-24">
      <div :style="`transform: rotate(${percentage}deg); transition: transform 1s ease-out;`"
           class="absolute top-0 left-0 w-full h-full rounded-full bg-primary"></div>
      <div class="absolute top-0 left-0 w-full h-full rounded-full bg-white"></div>
      <div class="absolute top-0 left-0 w-full h-full rounded-full border-4 border-dashed border-primary"></div>
      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span class="text-lg font-semibold text-primary">{{ percentage }}%</span>
      </div>
    </div>
    <div class="absolute top-20 left-0 w-full h-full flex items-center justify-center">
      <span class="text-sm font-semibold text-primary">{{ message }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    totalTime: {
      type: Number,
      default: 60
    },
    message: {
      type: String,
      default: 'Time left'
    }
  },
  setup(props) {
    const percentage = ref(100)

    setTimeout(() => {
      const intervalId = setInterval(() => {
        if (percentage.value > 0) {
          percentage.value -= 1
        } else {
          clearInterval(intervalId)
        }
      }, props.totalTime * 10)
    }, 50)

    return {
      percentage
    }
  }
})
</script>

<style scoped>
.bg-primary {
  background-color: var(--primary);
}
</style>
