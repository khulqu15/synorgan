<template>
    <ion-page>
        <ion-content>
            <div>
                <top-navigation/>
                <input type="checkbox" id="modal-language" class="modal-toggle" />
                <label for="modal-language" class="modal modal-bottom sm:modal-middle cursor-pointer">
                    <label class="modal-box relative" for="">
                        <h3 class="text-lg font-bold">Pilih Bahasa</h3>
                        
                    </label>
                </label>
                <bottom-navigation/>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        AppLayout
    }
})
</script>