<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-indigo-900">
                <div class="bg-primary w-full h-36 mt-16 pt-6 px-6 rouded-2xl text-white rounded-br-2xl rounded-bl-2xl">
                    <div class="flex items-center gap-6">
                        <div class="grow mt-5">
                            <h2 class="font-bold m-0">Sekolah Dasar</h2>
                            <p class="text-sm font-semibold mt-3 leading-none">Belajar organ dalam manusia dan jawab kuis dokter Sio!</p>
                        </div>
                        <div>
                            <button class="btn btn-primary text-white w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">
                                <Icon class="text-3xl" icon="material-symbols:event-note-outline-rounded" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-7">
                    <div v-for="(item, index) in levels" :key="`level-${index}`">
                        <div class="w-20 my-5 h-20 flex mx-auto items-center justify-items-center text-center bg-yellow-400 rounded-full">
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