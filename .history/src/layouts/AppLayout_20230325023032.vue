<template>
    <ion-page>
        <ion-content offset-bottom="0" class="custom-content" :padding="false">
            <div class="relative">
                <slot name="content"></slot>
                <top-navigation :key="user.country"/>
                <bottom-navigation/>

                <input type="checkbox" id="modal-language" class="modal-toggle" />
                <label for="modal-language" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                    <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Pilih Bahasa</h3>
                        <div v-for="(language, index) in languages" :key="`lang-${index}`" 
                        @click="chooseLanguage(language.name)"
                        :class="{'bg-primary/10': lowerCase(language.name) === user.country}"
                        class="my-2 flex transition-all px-4 rounded-xl gap-6 items-center justify-start hover:bg-primary/10">
                            <div>
                                <img :src="`assets/flags/${language.image}`" class="w-10 rounded-lg" alt="lang">
                            </div>
                            <div>
                                <h5>{{ language.name }}</h5>
                            </div>
                        </div>
                    </label>
                </label>

                <input type="checkbox" id="modal-heart" class="modal-toggle" />
                <label for="modal-heart" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                    <label class="modal-box relative" for="">
                        <div class="flex justify-center">
                            <div v-for="(heart, index) in user.condition.lives" :key="`lang-${index}`"> 
                                <img src="/assets/icons/heart.png" class="w-8" alt="">
                            </div>
                        </div>
                    </label>
                </label>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import TopNavigation from '@/components/TopNavigation.vue'
import { IonPage, IonContent } from '@ionic/vue'

export default defineComponent({
    data() {
        return {
            user: {
                country: '',
                condition: {
                    lives: 5
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
    components: {
        BottomNavigation,
        TopNavigation,
        IonPage,
        IonContent,
    },
    methods: {
        chooseLanguage(language: string) {
            this.user.country = String(language).toLowerCase()
            localStorage.setItem('user', JSON.stringify(this.user))
            document.getElementById('modal-language')?.click()
            this.getUser()
        },
        getUser() {
            const itemsString = localStorage.getItem('user');
            if (itemsString) {
                this.user = JSON.parse(itemsString);
            }
        },
    }
})
</script>

<style scoped>
.custom-content {
  --offset-top: 0px !important; /* Remove extra height from top */
  --offset-bottom: 0px !important; /* Remove extra height from bottom */
  /* If using safe-area-inset, you may need to override those as well */
  --padding-top: 0px !important;
  --padding-bottom: 0px !important;
}
</style>