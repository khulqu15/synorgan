<template>
    <div class="flex p-4 w-full items-center gap-x-4 justify-items-between justify-start">
        <div>
            <button class="btn btn-ghost">
                <Icon class="text-xl" icon="humbleicons:times"/>
            </button>
        </div>
        <div class="grow">
            <progress :key="`value-${currentProgress}`" class="progress progress-primary w-full" :value="currentProgress" max="100"></progress>
        </div>
        <div>
            <button class="btn btn-ghost">
                <div class="flex items-center gap-2">
                    <img src="assets/icons/heart.png" class="w-6" alt="">
                    <h6 class="m-0 text-gray-600 font-bold">{{ user.condition.lives }}</h6>
                </div>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'
export default defineComponent({
    props: ['progress', 'count'],
    components: {
        Icon
    },
    data() {
        return {
            user: {},
            currentProgress: 0
        }
    },
    created() {
        const itemsString = localStorage.getItem('user');
        if (itemsString) {
            this.user = JSON.parse(itemsString);
        }
    },
    methods: {
        gotoPage(e: any, path: string) {
            e.preventDefault()
            this.$router.push({name: path})
        } 
    }
})
</script>