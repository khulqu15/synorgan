<template>
    <ion-page>
        <ion-content>
            <div class="grid grid-cols-1 text-center items-center justify-items-center min-h-screen">
                <div class="w-3/4 p-4">
                    <div class="tooltip tooltip-open tooltip-top" data-tip="Hai, Aku dokter Sio !">
                        <img src="assets/sio.svg" alt="sio" class="w-full">
                    </div>
                </div>
                <div class="fixed bottom-0 left-0 p-6 w-full">
                    <button @click="gotoIntro()" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">Lanjutkan</button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

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