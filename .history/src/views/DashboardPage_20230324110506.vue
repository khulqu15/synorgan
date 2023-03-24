<template>
    <ion-page>
        <ion-content>
            <div>
                <top-navigation/>
                <bottom-navigation/>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import TopNavigation from '@/components/TopNavigation.vue'
export default defineComponent({
    components: {
        BottomNavigation,
        TopNavigation,
    }
})
</script>