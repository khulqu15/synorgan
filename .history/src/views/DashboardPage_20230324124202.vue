<template>
    <ion-page>
        <ion-content>
            <div>
                <top-navigation/>
                <input type="checkbox" id="modal-language" class="modal-toggle" />
                <label for="modal-language" class="modal modal-bottom sm:modal-middle cursor-pointer">
                    <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </label>
                </label>
                <bottom-navigation/>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import TopNavigation from '@/components/TopNavigation.vue'
export default defineComponent({
    components: {
        BottomNavigation,
        TopNavigation,
    }
})
</script>