<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200">
                <div class="relative p-3 w-full h-16 flex items-center justify-between justify-items-between border-b-2 border-gray-200">
                    <div>
                        <button @click="$router.go(-1)" class="btn btn-ghost">
                            <Icon icon="material-symbols:close-rounded" class="text-2xl" />
                        </button>
                    </div>
                    <div>
                        <h5 class="text-gray-600 font-bold">Toko</h5>
                    </div>
                    <div>
                        <div class="px-4 rounded-lg gap-2 flex items-center">
                            <img src="/assets/icons/gem.png" class="w-6" alt="">
                            <h6 class="text-green-600 font-bold text-xl">{{ user.condition.gems }}</h6>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div class="w-full bg-primary p-5 rounded-xl relative overflow-hidden">
                        <img src="/assets/premium.svg" class="w-1/2 absolute -bottom-2 right-0" alt="">
                        <div class="flex">
                            <div class="w-1/2">
                                <div class="p-2 px-3 inline-block bg-gradient-to-br to-blue-400 rounded-xl from-cyan-400">
                                    <h6 class="m-0 text-white font-bold italic">PowerPlus</h6>
                                </div>
                                <h6 class="font-bold text-white">Cepat berkembang dengan fitur menarik</h6>
                            </div>
                        </div>
                        <button class="btn relative bg-white text-gray-600 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-gray-300 flex justify-between">
                            <div class="flex items-center justify-start gap-2">
                                <span>Coba 1 Minggu Gratis</span>
                            </div>
                            <div class="flex items-center justify-start gap-2">
                                <Icon class="text-2xl" icon="fa6-regular:gem" />
                                <span>120</span>
                            </div>
                        </button>
                    </div>
                    <h4 class="font-bold">Pelayanan Lain</h4>
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