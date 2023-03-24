<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200 grid grid-cols-1 items-center justify-items-center text-center">
                <div class="w-3/4 p-4 mb-12">
                    <img src="assets/start.svg" class="w-full" alt="Synorgan">
                    <h2 class="text-3xl text-primary font-bold m-0 mb-4">Synorgan</h2>
                    <span class="text-sm text-gray-600">Cara seru, menyenangkan belajar <br> Organ Manusia bersama Dokter SiO</span>
                </div>
            </div>
            <div class="fixed bottom-0 left-0 p-6 w-full">
                <button @click="gotoIntro()" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">Ayo Mulai</button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'

export default defineComponent({
    components: {
        IonContent, IonPage
    },
    methods: {
        gotoIntro() {
            this.$router.push({name: 'IntroPage'})
            .then(() => {this.$router.go()})
        }
    }
})
</script>