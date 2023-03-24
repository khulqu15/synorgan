<template>
    <ion-page>
        <ion-content>
            <div class="grid grid-cols-1 bg-base-200 text-center min-h-screen justify-items-center" :class="{'items-center': intro < 4, 'pt-12': intro >= 4}">
                <div class="w-full absolute left-0 top-0 px-6 py-4 flex items-center gap-4">
                    <div>
                        <button @click="intro === 1 ? $router.push({name: 'StartPage', replace: true}) : decrementStep()" class="btn btn-ghost">
                            <Icon icon="material-symbols:chevron-left-rounded" class="text-2xl"/>
                        </button>
                    </div>
                    <div class="grow w-full" v-if="intro > 2">
                        <progress class="progress relative top-1 progress-primary w-full" :value="progress_form" max="100"></progress>
                    </div>
                </div>
                <div class="p-4" :class="{'w-3/4': intro < 3, 'w-full': intro >= 3}">
                    <div :class="{'opacity-0 invisible h-0': intro !== 1, 'opacity-1 visible': intro === 1}" class="transition-all">
                        <div class="tooltip tooltip-open tooltip-top tooltip-primary" data-tip="Hai, Aku dokter Sio !">
                            <img src="assets/sio.svg" alt="sio" class="w-full">
                        </div>
                        <div class="fixed bottom-0 left-0 p-6 w-full">
                            <button @click="intro += 1" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">Lanjutkan</button>
                        </div>
                    </div>
                    <div :class="{'opacity-0 invisible h-0': intro !== 2, 'opacity-1 visible': intro === 2}" class="transition-all">
                        <div class="tooltip tooltip-open tooltip-top tooltip-primary" data-tip="Ayo mulai belajarnya !">
                            <img src="assets/sio smart.svg" alt="sio" class="w-full">
                        </div>
                        <div class="fixed bottom-0 left-0 p-6 w-full">
                            <button @click="intro += 1" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">Lanjutkan</button>
                        </div>
                    </div>
                    <div :class="{'opacity-0 invisible h-0': intro !== 3, 'opacity-1 visible': intro === 3}" class="transition-all">
                        <div class="tooltip tooltip-open w-3/4 mx-auto tooltip-top tooltip-primary" data-tip="Nama kamu siapa ?">
                            <img src="assets/sio face.svg" alt="sio" class="w-3/4 mx-auto">
                        </div>
                        <div class="relative w-full">
                            <div class="absolute w-full bg-white h-144 -top-4 p-8 text-left rounded-2xl left-0">
                                <label for="user-name" class="relative -top-2 text-gray-500">Masukkan nama kamu</label>
                                <input type="text" id="user-name" v-model="user.name" placeholder="contoh: Andi" class="input w-full shadow-[0px_2px_0px_3px] shadow-gray-300" />

                            </div>
                        </div>
                        <div class="fixed bottom-0 left-0 p-6 w-full">
                            <button :disabled="user.name === null && user.name.length <= 2" @click="user.name !== null && user.name.length > 2 ? fillName() : intro = intro" 
                                class="btn w-full rounded-xl shadow-[0px_2px_0px_3px]"
                                :class="{'btn-primary shadow-indigo-800': user.name !== null && user.name.length > 2, 'shadow-gray-800': user.name === null || user.name.length <= 2}">Lanjutkan</button>
                        </div>
                    </div>
                    <div :class="{'opacity-0 invisible h-0': intro !== 4, 'opacity-1 visible': intro === 4}" class="transition-all">
                        <div class="text-left">
                            <div class="tooltip tooltip-open w-1/2 mx-auto tooltip-right tooltip-primary" :data-tip="`Hai ${user.name}, kamu kelas berapa ?`">
                                <img src="assets/sio face.svg" alt="sio" class="w-3/4 mx-auto">
                            </div>  
                        </div>
                        <div class="relative w-full mb-24">
                            <div v-for="(item, index) in classes" :key="`class-${index}`">
                                <div class="relative w-full bg-white h-144 -top-4 p-6 text-left rounded-2xl my-3 left-0">
                                    <div class="w-16 h-16 flex items-center justify-items-center text-center mb-3" :class="{'bg-indigo-100': index <= 1}">
                                        <img :src="`assets/class/${item.type}.png`" class="w-8 mx-auto inline-block" alt="">
                                    </div>
                                    <h5 class="relative m-0 font-bold text-gray-500 mb-2">{{ item.name }}</h5>
                                    <span class="text-sm">{{ item.description }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="fixed bottom-0 left-0 p-6 w-full">
                            <button :disabled="user.name === null && user.name.length <= 2" @click="user.name !== null && user.name.length > 2 ? fillName() : intro = intro" 
                                class="btn w-full rounded-xl shadow-[0px_2px_0px_3px]"
                                :class="{'btn-primary shadow-indigo-800': user.name !== null && user.name.length > 2, 'shadow-gray-800': user.name === null || user.name.length <= 2}">Lanjutkan</button>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue';

export default defineComponent({
    components: {
        Icon,
    },
    data() {
        return {
            intro: 4,
            user: {
                name: '',
                class: {
                    type: '',
                    name: '',
                    description: '',
                },
            },
            progress_form: 10,
            classes: [
                { type: 2, name: 'Jantung Jagoan', description: "Mari pelajari semua tentang jantung dan bagaimana jantung bekerja dalam tubuh manusia."},
                { type: 3, name: 'Otak Hebat', description: "Mari belajar tentang otak dan bagaimana otak membantu kita berpikir, merasakan, dan melakukan tindakan." },
                { type: 4, name: 'Paru Paru Cerdas', description: "Mari pelajari tentang paru-paru dan bagaimana paru-paru membantu kita bernapas dan mengambil oksigen." },
                { type: 5, name: 'Ginjal Gemilang', description: "Mari belajar tentang ginjal dan bagaimana ginjal membantu kita membuang limbah dan menjaga keseimbangan cairan dalam tubuh." },
            ]
        }
    },
    methods: {
        fillName() {
            this.intro += 1
            this.progress_form += 50
        },
        decrementStep() {
            this.intro -= 1
            if(this.progress_form >= 50) {
                this.progress_form = 10
                this.user.name = ''
            }
        }
    }
})
</script>

<style scoped>
.progress {
    height: 1rem !important;
}
.tooltip {
    --tooltip-tail: 6px !important;
}
.tooltip::before {
    border-radius: 0.75rem !important;
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    width: 170px !important;
}
</style>