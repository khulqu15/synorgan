<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200 grid grid-cols-1 items-center justify-items-center text-center">
                <div class="w-3/4 p-4">
                    <img src="assets/start.svg" class="w-full" alt="Synorgan">
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
    }
})
</script>