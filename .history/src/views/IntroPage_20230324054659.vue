<template>
    <ion-page>
        <ion-content>
            <div class="grid grid-cols-1 text-center items-center justify-items-center min-h-screen">
                <div class="w-3/4 p-4">
                    <div :class="{'opacity-0 invisible': intro !== 1, 'opacity-1 visible': intro === 1}" class="transition-all">
                        <div class="tooltip tooltip-open tooltip-top tooltip-primary" data-tip="Hai, Aku dokter Sio !">
                            <img src="assets/sio.svg" alt="sio" class="w-full">
                        </div>
                    </div>
                </div>
                <div class="fixed bottom-0 left-0 p-6 w-full">
                    <button @click="intro += 1" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">Lanjutkan</button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            intro: 1,
        }
    }
})
</script>

<style scoped>
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