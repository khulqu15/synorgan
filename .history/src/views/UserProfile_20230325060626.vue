<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-base-200 w-full">
                <div class="relative p-3 border-b-2 border-gray-300 pr-8 w-full h-16 flex items-center justify-between justify-items-between">
                    <div>
                        <button class="btn btn-ghost">
                            <Icon icon="cil:cog" class="text-3xl text-primary"/>
                        </button>
                    </div>
                    <div>
                        <h5 class="text-gray-600 font-bold">Profilku</h5>
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
                <div class="flex gap-5 px-6 pb-6 border-b-2 border-gray-300">
                    <div>
                        <button  class="btn bg-gray-200 text-gray-600 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-gray-400">
                            <img src="/assets/flags/indonesia.png" class="w-8" alt="">
                        </button>
                    </div>
                    <div class="grow">
                        <button  class="btn bg-red-500 text-white w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-700">
                            Keluar
                        </button>
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="font-bold m-0 text-xl">Statistik</h3>
                    <div class="space-y-4">
                        <div class="w-full border-2 border-gray-200 p-3"></div>
                    </div>
                </div>
            </div>
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
})
</script>


<style scoped>
.levels {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}
</style>