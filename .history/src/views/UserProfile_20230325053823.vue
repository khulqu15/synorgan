<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-base-200 w-full">
                Tets
            </div>
        </template>
    </app-layout>
</template>

<script lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            levels: 12
        }
    },
    components: {
        AppLayout
    }
})
</script>


<style scoped>
.levels {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}
</style>