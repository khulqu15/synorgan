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
                <div class="p-4">
                    <div>
                        <img src="/assets/readingbook.svg" alt="reading book" class="w-1/4 mx-auto">
                    </div>
                    <h4 class="font-bold text-gray-600">Penawaran Lain</h4>
                    <div class="text-center space-y-3">
                        <img src="/assets/closed store.svg" class="w-3/4 mx-auto" alt="">
                        <h4 class="m-0 font-bold text-gray-500">Oops.. kami minta maaf</h4>
                        <span class="text-gray-400">Sayangnya, masih belum ada <br> penawaran yang tersedia</span>
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