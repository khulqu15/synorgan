<template>
    <app-layout>
        <template v-slot:content>
            <div class="bg-primary w-full h-48 mt-16 pt-4 px-6 rouded-2xl text-white rounded-br-2xl rounded-bl-2xl">
                <h2 class="font-bold">Sekolah Dasar</h2>
                <span class="text-sm font-semibold">Belajar organ dalam manusia dan jawab kuis dokter Sio!</span>
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