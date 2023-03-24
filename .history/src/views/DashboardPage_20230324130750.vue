<template>
    <app-layout>
        <template v-slot:content>
            <div class="bg-primary w-full h-32 mt-16 rouded-xl"></div>
        </template>
    </app-layout>
</template>

<script lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        AppLayout
    }
})
</script>