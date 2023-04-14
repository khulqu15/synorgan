<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200 grid grid-cols-1 pt-12 justify-items-center">
                <div class="mb-12">
                    <button @click="selected -= 1" v-if="selected > 0" class="btn btn-ghost mb-4 mx-8">
                        <Icon icon="material-symbols:arrow-back-ios-rounded" />
                        Kembali
                    </button>
                    <div class="px-8 mb-12">
                        <h2 class="text-3xl text-primary font-bold m-0">Tutorial {{ selected + 1 }}</h2>
                        <span class="text-sm text-base-content">{{ tutorials[selected].title }}</span>
                    </div>
                    <img :src="`/assets/tutorial/${tutorials[selected].image}`" class="w-full scale-105" alt="Synorgan">
                </div>
            </div>
            <div class="fixed bottom-0 left-0 p-6 w-full">
                <button @click="nextButton($event)" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">Lanjutkan</button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
    data() {
        return {
            selected: 0,
            tutorials: [
                {title: "Akses Pembelajan Seru bersama Dokter SiO", image: "theory.gif"},
                {title: "Mengerjakan Quiz Menantang", image: "quiz.gif"},
                {title: "Dapatkan Reward Gem Kamu", image: "reward.gif"},
            ]
        }
    },
    components: {
        IonContent, IonPage, Icon
    },
    methods: {
        nextButton(e: any) {
            if(this.selected >= 2) {
                this.$router.push({name: 'DashboardPage'})
            } else {
                this.selected += 1
            }
        }
    }
})
</script>