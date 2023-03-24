<template>
    <app-layout>
        <template v-slot:content>
            
        </template>
    </app-layout>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';
import AppLayout from '@/layouts/AppLayout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            levels: 12
        }
    },
    components: {
        AppLayout, Icon
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