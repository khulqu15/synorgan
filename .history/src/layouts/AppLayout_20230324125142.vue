<template>
    <ion-page>
        <ion-content>
            <div>
                <top-navigation/>
                <bottom-navigation/>

                <input type="checkbox" id="modal-language" class="modal-toggle" />
                <label for="modal-language" class="modal modal-bottom sm:modal-middle cursor-pointer">
                    <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Pilih Bahasa</h3>
                        <div v-for="(language, index) in languages" :key="`lang-${index}`" 
                        :class="{'bg-primary/10': language.name === user.country}"
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
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import TopNavigation from '@/components/TopNavigation.vue'
export default defineComponent({
    data() {
        return {
            user: {},
            languages: [
                { name: 'Indonesia', image: 'indonesia.png' },
                { name: 'Jepang', image: 'japan.png' },
                { name: 'English', image: 'english.png' },
            ]
        }
    },
    created() {
        const itemsString = localStorage.getItem('user');
        if (itemsString) {
            this.user = JSON.parse(itemsString);
        }
    },
    components: {
        BottomNavigation,
        TopNavigation,
    }
})
</script>