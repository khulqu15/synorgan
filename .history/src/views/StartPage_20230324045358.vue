<template>
    <ion-page>
        <ion-content>
            <div>
                <h1>Start</h1>
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