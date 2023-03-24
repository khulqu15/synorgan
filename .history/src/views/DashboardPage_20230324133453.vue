<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-indigo-900">
                <div class="bg-primary w-full h-36 mt-16 pt-4 px-6 rouded-2xl text-white rounded-br-2xl rounded-bl-2xl">
                    <div class="flex items-center gap-6">
                        <div class="grow mt-5">
                            <h2 class="font-bold m-0">Sekolah Dasar</h2>
                            <span class="text-sm font-semibold">Belajar organ dalam manusia dan jawab kuis dokter Sio!</span>
                        </div>
                        <div>
                            <button class="btn btn-ghost border-2 border-black"><Icon class="text-3xl" icon="material-symbols:event-note-outline-rounded" /></button>
                        </div>
                    </div>
                </div>
                <div class="levels">
                    <div v-for="(item, index) in 20" :key="`level-${index}`">
                        <div class="w-24 h-24 flex items-center justify-items-center text-center bg-yellow-400 rounded-full transform translate-y-2" :key="index">
                            <span class="inline-block mx-auto">{{ item }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </app-layout>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';
import AppLayout from '@/layouts/AppLayout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        AppLayout, Icon
    }
})
</script>

<style scoped>
.transform {
  transform: translateX(5px);
}
</style>