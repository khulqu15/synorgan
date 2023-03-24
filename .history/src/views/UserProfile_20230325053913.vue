<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-base-200 w-full">
                <div class="relative p-3 pr-8 w-full h-16 flex items-center justify-between justify-items-between">
                    <div>
                        <button @click="$router.go(-1)" class="btn btn-ghost">
                            <Icon icon="material-symbols:close-rounded" class="text-2xl" />
                        </button>
                    </div>
                    <div>
                        <h5 class="text-gray-600 font-bold">Profilku</h5>
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
            levels: 12
        }
    },
    components: {
        AppLayout
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