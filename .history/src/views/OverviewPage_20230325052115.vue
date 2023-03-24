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
                    <div class="text-center border-b-2 border-gray-300 pb-8">
                        <img src="/assets/readingbook.svg" alt="reading book" class="w-1/2 mx-auto">
                        <h2 class="font-bold m-0">Sekolah Dasar</h2>
                        <p class="text-sm mt-2 text-gray-600 leading-none">Belajar organ dalam manusia dan jawab kuis dokter Sio!</p>
                    </div>
                    <div class="pt-3 px-4">
                        <h3 class="font-bold text-primary">Kata Kunci</h3>
                        <div class="space-y-4">
                            <div class="w-full bg-white p-4 rounded-xl" v-for="(overview, index) in overviews" :key="`overview-${index}`">
                                <div class="flex gap-2 items-center">
                                    <img :src="`/assets/icons/${overview.image}`" class="w-10" alt="">
                                    <h4 class="m-0 font-semibold text-gray-600">{{ overview.name }}</h4>
                                </div>
                                <p class="leading-tight mt-3">{{ overview.description }}</p>
                            </div>
                        </div>
                        <h3 class="font-bold text-primary">Hadiah</h3>
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
            overviews: [
                { name: 'Hidung', image: 'hidung.png', description: 'Mempelajari fungsi, bagian bagian dari hidung. dan terdapat kuis menarik mengenai hidung.' },
                { name: 'Faring', image: 'faring.png', description: 'Mempelajari faring mulai dari definisi dan fungsi. dan terdapat kuis menarik mengenai hidung.' },
                { name: 'Laring', image: 'laring.png', description: 'Memplajari dan mengerjakan persoalan menantang mengenaii organ penafasan laring' },
                { name: 'Trakea', image: 'trakea.png', description: 'Mempelajari fungsi, bagian bagian dari trakea. dan terdapat kuis menarik mengenai trakea.' },
                { name: 'Brongkus', image: 'brongkus.png', description: 'Mempelajari definisi dan fungsi dari brongkus. dan terdapat kuis menarik pada materi ini.' },
                { name: 'Brongkiolus', image: 'brongkiolus.png', description: 'Mempelajari segala hal mengenai brongkiolus secara efektif dan menyenangkan' },
            ],
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