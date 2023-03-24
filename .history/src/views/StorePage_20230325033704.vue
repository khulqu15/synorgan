<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200">
                <div class="relative w-full h-16 flex items-center justify-item-between border-b-2 border-gray-200">
                    Test
                    Test
                    Test
                </div>
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
        gotoIntro(e: any) {
            e.preventDefault()
            this.$router.push({name: 'IntroPage', replace: true})
        }
    }
})
</script>