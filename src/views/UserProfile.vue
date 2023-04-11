<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-base-200 w-full text-base-content">
                <div class="relative pt-5 p-3 border-b-2 border-base-300 pr-8 w-full h-16 flex items-center justify-between justify-items-between">
                    <div>
                        <button class="btn btn-ghost">
                            <Icon icon="cil:cog" class="text-3xl text-primary"/>
                        </button>
                    </div>
                    <div>
                        <h5 class="font-bold">Profilku</h5>
                    </div>
                </div>
                <div class="flex p-6 justify-between items-center">
                    <div>
                        <h3 class="font-bold m-0 text-xl">{{ user.name }}</h3>
                        <p>Bergabung Maret 2023</p>
                    </div>
                    <div>
                        <div class="avatar">
                            <div class="w-28 rounded-full">
                                <img src="/assets/avatars/1.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex gap-5 px-6 pb-6 border-b-2 border-base-300">
                    <div>
                        <label for="modal-language" class="btn bg-base-100 text-gray-600 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-base-300">
                            <img :src="`/assets/flags/${user.country}.png`" class="w-8 rounded-lg" alt="">
                        </label>
                    </div>
                    <div class="grow">
                        <label for="modal-logout"  class="btn bg-red-500 text-white w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-700">
                            Keluar
                        </label>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-bold m-0 text-xl">Statistik</h3>
                    <div class="space-y-4 mt-3">
                        <div class="w-full border-2 border-base-300 p-4 rounded-xl">
                            <div class="flex gap-3">
                                <div>
                                    <img src="/assets/icons/hot-sale.png" class="w-7" alt="fire">
                                </div>
                                <div>
                                    <h5 class="m-0 text-2xl font-bold">{{ user.condition.active_count }} Hari</h5>
                                    <p class="mb-0">Progress saat ini</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full border-2 border-base-300 p-4 rounded-xl">
                            <div class="flex gap-3">
                                <div>
                                    <img src="/assets/icons/gem.png" class="w-7" alt="fire">
                                </div>
                                <div>
                                    <h5 class="m-0 text-2xl font-bold">{{ user.condition.gems }} Gem</h5>
                                    <p class="mb-0">Kumpulkan banyak gem</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full border-2 border-base-300 p-4 rounded-xl">
                            <div class="flex gap-3">
                                <div>
                                    <img src="/assets/icons/heart.png" class="w-7" alt="fire">
                                </div>
                                <div>
                                    <h5 class="m-0 text-2xl font-bold">{{ user.condition.lives }} Hati</h5>
                                    <p class="mb-0">Jaga hatimu, tetap belajar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="modal-logout" class="modal-toggle" />
            <label for="modal-logout" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                <label class="modal-box relative" for="">
                    <img src="/assets/icons/sad.png" alt="Sad emoji" class="w-12">
                    <h3 class="text-lg font-bold">Yakin Logout ?</h3>
                    <p class="mb-6">Ketika kamu logout, maka game ini akan start dari awal lagi ketika kamu kembali.</p>
                    <div class="grid grid-cols-2 gap-3">
                        <label for="modal-logout" class="btn mt-3 bg-gray-200 text-gray-600 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-gray-400">
                            Tidak jadi
                        </label>
                        <button @click="onLogout()" class="btn mt-3 bg-red-500 text-white w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-700">
                            Ya, Saya keluar
                        </button>
                    </div>
                </label>
            </label>
        </template>
    </app-layout>
</template>

<script lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { Icon } from '@iconify/vue'
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            user: {}
        }
    },
    components: {
        AppLayout, Icon
    },
    created() {
        const itemsString = localStorage.getItem('user');
        if (itemsString) {
            this.user = JSON.parse(itemsString);
        }
    },
    methods: {
        onLogout() {
            document.getElementById('modal-logout')?.click()
            localStorage.removeItem('user')
            this.$router.push({name: 'StartPage'})
        },
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