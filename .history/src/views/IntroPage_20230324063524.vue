<template>
    <ion-page>
        <ion-content>
            <div class="grid grid-cols-1 bg-base-200 text-center min-h-screen justify-items-center" :class="{'items-center': intro < 4, 'pt-12': intro >= 4}">
                <div class="w-full absolute left-0 top-0 px-6 py-4 flex items-center gap-4">
                    <div>
                        <button @click="intro === 1 ? $router.push({name: 'StartPage', replace: true}) : intro -= 1" class="btn btn-ghost">
                            <Icon icon="material-symbols:chevron-left-rounded" class="text-2xl"/>
                        </button>
                    </div>
                    <div class="grow w-full" v-if="intro > 2">
                        <progress class="progress relative top-1 progress-primary w-full" value="10" max="100"></progress>
                    </div>
                </div>
                <div class="w-3/4 p-4">
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
                        <div class="tooltip tooltip-open tooltip-top tooltip-primary" data-tip="Nama kamu siapa ?">
                            <img src="assets/sio face.svg" alt="sio" class="w-full">
                        </div>
                        <div class="relative w-full">
                            <div class="absolute w-full bg-white h-144"></div>
                        </div>
                        <div class="fixed bottom-0 left-0 p-6 w-full">
                            <button @click="intro += 1" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">Lanjutkan</button>
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
            intro: 1,
            user: {
                name: null,
                class: null,
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
}
</style>