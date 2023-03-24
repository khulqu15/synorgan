<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-200">
                <div class="relative p-3 w-full h-16 flex items-center justify-between justify-items-between border-b-2 border-gray-200">
                    <div>
                        <button class="btn btn-ghost">
                            <Icon icon="material-symbols:close-rounded" class="text-2xl" />
                        </button>
                    </div>
                    <div>
                        <h5 class="text-gray-600">Toko</h5>
                    </div>
                    <div>
                        <div class="px-4 bg-green-100 rounded-lg gap-2 flex items-center">
                            <img src="/assets/icons/gem.png" class="w-6" alt="">
                            <h6 class="text-green-700 font-bold text-xl">{{ user.condition.gems }}</h6>
                        </div>
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