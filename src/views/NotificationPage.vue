<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-base-200 w-full">
                <div class="relative pt-5 p-3 border-b-2 border-gray-300 pr-8 w-full h-16 flex items-center justify-end justify-items-between">
                    <div>
                        <h5 class="text-gray-600 font-bold">Notifikasi</h5>
                    </div>
                </div>
                <div class="pt-20 text-center mx-auto w-3/4">
                    <img src="/assets/notif.svg" class="w-full mx-auto" alt="No Gift">
                    <h4 class="font-bold">Hmmm.. Sepertinya kamu tidak notifikasi</h4>
                    <p>Nanti akan dikabari kalau ada notifikasi</p>
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