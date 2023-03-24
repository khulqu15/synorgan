<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200">
                <div class="relative p-3 pr-8 w-full h-16 flex items-center justify-between justify-items-between">
                    <div>
                        <button @click="$router.go(-1)" class="btn btn-ghost">
                            <Icon icon="material-symbols:close-rounded" class="text-2xl" />
                        </button>
                    </div>
                    <div>
                        <h5 class="text-gray-600 font-bold">Kisi Kisi</h5>
                    </div>
                </div>
                <div>
                    <div class="text-center border-b-2 border-gray-200 pb-6">
                        <img src="/assets/readingbook.svg" alt="reading book" class="w-1/2 mx-auto">
                        <h2 class="font-bold m-0">Sekolah Dasar</h2>
                        <p class="text-sm mt-2 text-gray-600 leading-none">Belajar organ dalam manusia dan jawab kuis dokter Sio!</p>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
    components: {
        IonContent, IonPage, Icon
    },
    methods: {
        gotoIntro(e: any) {
            e.preventDefault()
            this.$router.push({name: 'IntroPage', replace: true})
        },
        getUser() {
            const itemsString = localStorage.getItem('user');
            if (itemsString) {
                this.user = JSON.parse(itemsString);
            }
        },
    },
    data() {
        return {
            user: {
                country: '',
                condition: {
                    lives: 5,
                    gems: 0,
                }
            },
            languages: [
                { name: 'Indonesia', image: 'indonesia.png' },
                { name: 'Jepang', image: 'japan.png' },
                { name: 'English', image: 'english.png' },
            ]
        }
    },
    created() {
        this.getUser()
    },
})
</script>