<template>
    <div class="w-full h-20 fixed left-0 -bottom-2 z-20">
        <div class="border-t-2 p-3 bg-base-100 shadow-5xl border-base-300">
            <div class="flex items-center justify-items-center justify-center text-center">
                <div class="grow">
                    <button @click="$router.push({name: 'DashboardPage'})" class="btn btn-ghost">
                        <img src="assets/icons/home.png" class="w-8" alt="">
                    </button>
                </div>
                <div class="grow">
                    <button @click="$router.push({name: 'GiftPage'})" class="btn btn-ghost relative">
                        <div v-if="available.gift" class="absolute w-3 h-3 bg-red-600 rounded-xl top-3 right-4"></div>
                        <img src="assets/icons/gift-box.png" class="w-8" alt="">
                    </button>
                </div>
                <div class="grow">
                    <button  @click="$router.push({name: 'UserProfile'})" class="btn btn-ghost">
                        <img src="assets/avatars/1.png" class="w-8" alt="">
                    </button>
                </div>
                <div class="grow">
                    <button @click="$router.push({name: 'NotificationPage'})" class="btn btn-ghost">
                        <img src="assets/icons/no_notification.png" class="w-8" alt="">
                    </button>
                </div>
                 <div class="grow">
                    <button @click="$router.push({name: 'DeveloperPage'})" class="btn btn-ghost">
                        <img src="assets/icons/shield.png" class="w-8" alt="">
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
            available: {
                gift: false
            }
        }
    },
    created() {
        this.syncData()
    },
    methods: {
        syncData() {
            const gameGift = JSON.parse(localStorage.getItem("game_gift") as string)
            if(gameGift && gameGift.length > 0) this.available.gift = true
            else this.available.gift = false
        }
    }
})
</script>
