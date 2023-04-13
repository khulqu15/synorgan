<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-base-200 w-full">
                <div class="relative pt-5 p-3 border-b-2 border-base-300 pr-8 w-full h-16 flex items-center justify-end justify-items-between">
                    <div>
                        <h5 class="text-base-content font-bold">Pengembang</h5>
                    </div>
                </div>
                <!-- <div class="p-6 border-b-2 border-base-300">
                    <h2 class="font-bold text-primary">Konten Writer</h2>
                    <div class="bg-base-200 text-base-content rounded-xl p-4">
                        <div class="flex justify-start mb-4 gap-4 items-center">
                            <div>
                                <div class="avatar">
                                    <div class="w-20 bg-primary rounded-full">
                                        <img src="/assets/developer/ula.png" class="relative" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold m-0 text-xl">Ula Nurmala</h3>
                                <p class="text-sm text-base-content">19010644037</p>
                            </div>
                        </div>
                        <div class="bg-primary px-4 py-3 w-full text-white text-white rounded-xl">
                            <h6 class="m-0"><span class="font-bold">Universitas Negeri Surabaya</span> <br> <span class="text-sm">Pendidikan Guru Sekolah Dasar</span></h6>
                        </div>
                    </div>
                </div> -->
                <div class="p-6 space-y-5 pb-24">
                    <h2 class="font-bold text-primary">Orbbit Team</h2>
                     <div class="bg-white rounded-xl p-4">
                        <div class="flex justify-start mb-4 gap-4 items-center">
                            <div>
                                <div class="avatar">
                                    <div class="w-20 bg-primary rounded-full">
                                        <img src="/assets/developer/ninno.png" class="relative" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold m-0 text-xl">Mohammad Khusnul Khuluq</h3>
                                <p class="text-sm text-gray-600">Software Developer at Orbbit</p>
                            </div>
                        </div>
                        <div class="bg-primary px-4 py-3 w-full text-white text-white rounded-xl">
                            <h6 class="m-0"><span class="font-bold">Politeknik Elektronika Negeri Surabaya</span> <br> <span class="text-sm">Teknik Elektronika</span></h6>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4">
                        <div class="flex justify-start mb-4 gap-4 items-center">
                            <div>
                                <div class="avatar">
                                    <div class="w-20 bg-primary rounded-full">
                                        <img src="/assets/developer/dewa.png" class="relative" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold m-0 text-xl">Putra Dewangga</h3>
                                <p class="text-sm text-gray-600">UiUx Designer at Orbbit</p>
                            </div>
                        </div>
                        <div class="bg-primary px-4 py-3 w-full text-white text-white rounded-xl">
                            <h6 class="m-0"><span class="font-bold">Politeknik Elektronika Negeri Surabaya</span> <br> <span class="text-sm">Teknik Elektronika</span></h6>
                        </div>
                    </div>
                    <div class="bg-white rounded-xl p-4">
                        <div class="flex justify-start mb-4 gap-4 items-center">
                            <div>
                                <div class="avatar">
                                    <div class="w-20 bg-primary rounded-full">
                                        <img src="/assets/developer/deva.png" class="relative" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-bold m-0 text-xl">Desvina Deva Lucya</h3>
                                <p class="text-sm text-gray-600">Illustrator at Orbbit</p>
                            </div>
                        </div>
                        <div class="bg-primary px-4 py-3 w-full text-white text-white rounded-xl">
                            <h6 class="m-0"><span class="font-bold">Universitas Negeri Surabaya</span> <br> <span class="text-sm">Teknologi Pendidikan</span></h6>
                        </div>
                    </div>
                    <div class="text-center grid grid-cols-1 justify-items-center justify-center">
                        <div>
                            <img src="/assets/developer/logo_dev.png" alt="Orbbit Logo" class="w-16 mx-auto">
                            <p class="text-sm mt-4 text-base-content">2023 Developed by <span class="font-bold text-primary">Orbbit Team</span></p>
                        </div>
                    </div>
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
            user: {}
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