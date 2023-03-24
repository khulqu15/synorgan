<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200">
                <div class="relative p-3 w-full h-16 flex items-center justify-between justify-items-between border-b-2 border-gray-200">
                    <div>
                        <button class="btn btn-ghost">
                            <Icon icon="material-symbols:close-rounded" />
                        </button>
                    </div>
                    <div></div>
                    <div></div>
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
        }
    }
})
</script>