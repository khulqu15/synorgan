<template>
    <div class="w-full h-16 fixed left-0 top-0">
        <div class="border-b-2 p-3 bg-base-100 pt-4 shadow-5xl border-gray-200">
            <div class="flex items-center justify-items-center justify-center text-center">
                <div class="grow">
                    <label for="modal-language" class="btn btn-ghost px-2">
                        <img :src="`assets/flags/${user.country}.png`" class="rounded-lg w-8" alt="flags">
                    </label>
                </div>
                <div class="grow">
                    <button class="btn btn-ghost">
                        <div class="flex items-center gap-2">
                            <img src="assets/icons/hot-sale.png" class="w-8" alt="">
                            <h4 class="m-0 text-gray-600 font-bold">{{ user.condition.active_count }}</h4>
                        </div>
                    </button>
                </div>
                <div class="grow">
                    <button class="btn btn-ghost">
                        <div class="flex items-center gap-2">
                            <img src="assets/icons/gem.png" class="w-8" alt="">
                            <h4 class="m-0 text-gray-600 font-bold">{{ user.condition.gems }}</h4>
                        </div>
                    </button>
                </div>
                <div class="grow">
                    <button class="btn btn-ghost">
                        <div class="flex items-center gap-2">
                            <img src="assets/icons/heart.png" class="w-8" alt="">
                            <h4 class="m-0 text-gray-600 font-bold">{{ user.condition.lives }}</h4>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            user: {}
        }
    },
    created() {
        const itemsString = localStorage.getItem('user');
        if (itemsString) {
            this.user = JSON.parse(itemsString);
        }
    }
})    
</script>