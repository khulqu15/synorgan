<template>
    <app-layout>
        <template v-slot:content>
            <div class="bg-primary w-full h-32 mt-16 pt-5 px-6 rouded-2xl text-white rounded-br-2xl rounded-bl-2xl">
                <h2 class="font-bold">Sekolah Dasar</h2>
            </div>
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