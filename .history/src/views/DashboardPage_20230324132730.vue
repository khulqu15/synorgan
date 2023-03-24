<template>
    <app-layout>
        <template v-slot:content>
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
            <div class="levels bg-primary/20">
                <div></div>
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