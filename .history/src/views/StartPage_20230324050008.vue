<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200 grid grid-cols-1 ">
                <h1 class="m-0">Start</h1>
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