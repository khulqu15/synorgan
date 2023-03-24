<template>
    <app-layout>
        <template v-slot:content>
            <div class="bg-primary w-full mt-16 pt-24 rouded-2xl text-white rounded-br-2xl rounded-bl-2xl">
                <h2>Sekolah Dasar</h2>
            </div>
        </template>
    </app-layout>
</template>

<script lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    components: {
        AppLayout
    }
})
</script>