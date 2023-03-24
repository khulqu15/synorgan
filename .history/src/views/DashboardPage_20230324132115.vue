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
            <ion-content>
                <ion-grid>
                    <ion-row>
                    <ion-col size="4" v-for="level in levels" :key="level.id">
                        <ion-card :class="{'active': level.isActive}">
                        <ion-card-header>
                            <ion-card-title>Level {{ level.id }}</ion-card-title>
                        </ion-card-header>
                        <ion-card-content>
                            <ion-icon name="star" v-for="n in level.stars" :key="n"></ion-icon>
                        </ion-card-content>
                        </ion-card>
                    </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
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
            levels: [
                { id: 1, stars: 3, isActive: true },
                { id: 2, stars: 0, isActive: false },
                { id: 3, stars: 0, isActive: false },
                { id: 4, stars: 0, isActive: false },
                { id: 5, stars: 0, isActive: false },
                { id: 6, stars: 0, isActive: false },
                { id: 7, stars: 0, isActive: false },
                { id: 8, stars: 0, isActive: false },
                { id: 9, stars: 0, isActive: false },
                { id: 10, stars: 0, isActive: false },
                { id: 11, stars: 0, isActive: false },
                { id: 12, stars: 0, isActive: false },
                { id: 13, stars: 0, isActive: false },
                { id: 14, stars: 0, isActive: false },
                { id: 15, stars: 0, isActive: false },
                { id: 16, stars: 0, isActive: false },
                { id: 17, stars: 0, isActive: false },
                { id: 18, stars: 0, isActive: false },
                { id: 19, stars: 0, isActive: false },
                { id: 20, stars: 0, isActive: false },
            ]
        }
    },
    components: {
        AppLayout, Icon
    }
})
</script>