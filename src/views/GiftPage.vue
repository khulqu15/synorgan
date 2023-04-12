<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-base-200 w-full">
                <div class="relative pt-5 p-3 border-b-2 border-base-300 pr-8 w-full h-16 flex items-center justify-end justify-items-between">
                    <div>
                        <h5 class="text-base-content font-bold">Hadiahku</h5>
                    </div>
                </div>
                <div v-if="reward.length > 0" class="p-6 space-y-5 pb-24">
                    <h2 class="font-bold text-primary">List Hadiah</h2>
                     <div v-for="(item, index) in reward" :key="`reward-${index}`" class="bg-base-300 text-base-content rounded-xl p-4">
                        <div class="flex justify-start gap-4 items-center">
                            <div>
                                <div class="avatar">
                                    <div class="w-16 bg-blue-500/10 p-3 rounded-lg">
                                        <img :src="`/assets/icons/${item.icon}`" class="relative" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold m-0 text-xl">{{ item.name }}</h3>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-x-4 items-center pb-4 p-2">
                            <div class="w-full border-r-2 border-gray-200 flex gap-x-3 items-center">
                                <img src="/assets/icons/heart.png" class="w-10 h-10" alt="Hati">
                                <h3 class="text-red-500 font-bold">{{ item.lives }}</h3>
                            </div>
                            <div class="w-full flex gap-x-3 items-center">
                                <img src="/assets/icons/gem.png" class="w-10 h-10" alt="Gem">
                                <h3 class="text-green-500 font-bold">{{ item.gems }}</h3>
                            </div>
                        </div>
                        <button @click="onClaim(item, index)" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-violet-900">Klaim Sekarang</button>
                    </div>
                </div>
                <div v-else class="pt-20 text-center text-base-content mx-auto w-3/4">
                    <img src="/assets/no-gift.png" class="w-1/2 mx-auto" alt="No Gift">
                    <h4 class="font-bold">Hmmm.. Sepertinya kamu tidak punya hadiah dari dokter</h4>
                    <p>Ayo belajar, jawab quiz dan dapatkan hadiah dari dokter SiO</p>
                    <button @click="$router.push({name: 'DashboardPage'})" class="btn mt-6 btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-violet-900">Lanjut belajar</button>
                </div>
            </div>
        </template>
    </app-layout>
</template>

<script lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            user: {
                condition: {
                    lives: 0,
                    gems: 0,
                }
            },
            reward: [{
                gems :5,   
                lives :2,
                name: "",
                icon: "",
                image: "",
            }]
        }
    },
    components: {
        AppLayout
    },
    created() {
        const itemsString = localStorage.getItem('user');
        if (itemsString) {
            this.user = JSON.parse(itemsString);
        }
        const listGift = JSON.parse(localStorage.getItem("game_gift") as string)
        if(listGift) this.reward = listGift
        else this.reward = []
        console.log(this.reward)
    },
    methods: {
        onClaim(item: any, index: number) {
            if(this.reward && this.reward.length > 0) {
                this.reward.splice(index, 1)
                console.log(this.user)
                console.log(this.reward)
                console.log(item)
                this.user.condition.lives += item.lives
                this.user.condition.gems += item.gems
                localStorage.setItem("user", JSON.stringify(this.user))
                if(this.reward.length <= 0)
                    localStorage.removeItem("game_gift")
                else
                    localStorage.setItem("game_gift", JSON.stringify(this.reward))
            }
        }
    }
})
</script>


<style scoped>
.levels {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}
</style>