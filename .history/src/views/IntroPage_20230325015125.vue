<template>
    <ion-page>
        <ion-content class="min-h-screen bg-base-200">
            
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue';
import { IonPage, IonContent } from '@ionic/vue'

export default defineComponent({
    components: {
        Icon, IonPage, IonContent
    },
    data() {
        return {
            intro: 1,
            user: {
                name: '',
                class: {
                    type: null as number | null,
                    name: null as string | null,
                    description: null as string | null,
                },
                condition: {
                    active_count: 0,
                    gems: 0,
                    lives: 5,
                },
                country: 'indonesia'
            },
            progress_form: 10,
            classes: [
                { type: 2, name: 'Jantung Jagoan', description: "Mari pelajari semua tentang jantung dan bagaimana jantung bekerja dalam tubuh manusia."},
                { type: 3, name: 'Otak Hebat', description: "Mari belajar tentang otak dan bagaimana otak membantu kita berpikir, merasakan, dan melakukan tindakan." },
                { type: 4, name: 'Paru Paru Cerdas', description: "Mari pelajari tentang paru-paru dan bagaimana paru-paru membantu kita bernapas dan mengambil oksigen." },
                { type: 5, name: 'Ginjal Gemilang', description: "Mari belajar tentang ginjal dan bagaimana ginjal membantu kita membuang limbah dan menjaga keseimbangan cairan dalam tubuh." },
            ]
        }
    },
    methods: {
        fillName() {
            this.intro += 1
            this.progress_form += 50
        },
        fillClass(index: any) {
            this.user.class.type = this.classes[index].type
            this.user.class.name = this.classes[index].name
            this.user.class.description = this.classes[index].description
        },
        saveData() {
            this.progress_form += 50
            localStorage.setItem("user", JSON.stringify(this.user))
            setTimeout(() => {
                this.$router.push({name: 'IntroSuccessPage', replace: true})
            }, 1000)
        },
        decrementStep(e: any) {
            if(this.intro === 1) {
                e.preventDefault()
                this.$router.push({name: 'StartPage'})
            } else {
                this.intro -= 1
                if(this.progress_form >= 50) {
                    this.progress_form = 10
                    this.user.name = ''
                }
            }
        }
    }
})
</script>

<style scoped>
.progress {
    height: 1rem !important;
}
.tooltip {
    --tooltip-tail: 6px !important;
}
.tooltip::before {
    border-radius: 0.75rem !important;
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    width: 170px !important;
}
</style>