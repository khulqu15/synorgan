<template>
    <ion-page>
        <ion-content>
            <div class="min-h-screen bg-base-100 text-base-content w-full p-6 grid grid-cols-1 pt-12 justify-start">
                <div class="content">
                    <div class="flex items-center gap-x-2 mb-4">
                        <img :src="`/assets/icons/${dataGame.icon}`" class="w-8" :alt="dataGame.icon">
                        <h5 class="m-0 font-semibold text-primary" v-if="dataGame.name">{{ dataGame.name }}</h5>
                    </div>
                    <div class="text-center pt-8 space-y-4">
                        <h4 class="font-bold">Horeee.. Selamat kamu dapat hadiah dari dokter SiO</h4>
                        <img src="/assets/gift.svg" alt="Gift" class="w-3/4 mx-auto">
                        <p>Tetap konsisten dan semangat belajar agar kamu bertambah pintar</p>
                    </div>
                    <div class="p-3 relative bg-base-200 rounded-xl border-2 border-base-300 mt-7">
                        <div class="inline-block px-3 py-2 bg-primary rounded-xl absolute -top-4 left-0">
                            <h5 class="m-0 text-white font-bold">Kamu mendapatkan </h5>
                        </div>
                        <div class="grid grid-cols-2 gap-x-4 items-center pt-6 p-2">
                            <div class="w-full border-r-2 border-base-300 flex gap-x-3">
                                <img src="/assets/icons/heart.png" class="w-12" alt="Hati">
                                <h3 class="text-red-500 font-bold">{{ reward.lives }}</h3>
                            </div>
                            <div class="w-full flex gap-x-3">
                                <img src="/assets/icons/gem.png" class="w-12" alt="Gem">
                                <h3 class="text-green-500 font-bold">{{ reward.gems }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fixed w-full bottom-0 p-6 left-0">
                    <button @click="nextContent()" class="btn mt-3 btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">
                        Simpan
                    </button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'
import { useStore } from 'vuex'
import { Game } from '@/interfaces/game.interfaces'

export default defineComponent({
    props: ["data"],
    components: {
        IonPage, IonContent
    },
    data() {
        return {
            listsCase: ["nose", "pharynx", "larynx", "trachea", "bronchi", "bronchioles", "alveoli", "breathing", "best_predicate"],
            currentState: 0,
            progressBar: 0,
            dataGame: {
                name: "",
                image: "",
                icon: "",
                is_done: false,
                id: 0,
                type: 'quiz'
            },
            case: "Hidung",
            credentialAccess: false,
            user: {
                condition: {
                    gems: 0,
                    lives: 0
                }
            },
            reward: {
                gems: 5,
                lives: 2,
                name: "",
                image: "",
                icon: "",
            }
        }
    },
    mounted() {
        this.progressBar = 0
        setTimeout(() => {
            const audio = new Audio('/sound/win.mp3')
            audio.play()
        }, 200);
    },
    created() {
        const store = useStore()
        const paramId: any = parseInt(this.$route.params.id as string)
        const getData = computed(() => store.getters['gameData']);
        this.dataGame = getData.value
        console.log(this.dataGame)
        const itemsString = localStorage.getItem('user')
        if (itemsString) {
            this.user = JSON.parse(itemsString);
        }
        this.case = this.listsCase[(paramId - 1)];
        this.loadJsonData(this.case);
    },
    methods: {
        async loadJsonData(caseName: string) {
            try {
                const response = await fetch(`/data/${caseName}/reward.json`)
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const jsonData = await response.json()
                this.reward.gems = jsonData.reward.gems
                this.reward.lives = jsonData.reward.lives
                this.reward.name = this.dataGame.name
                this.reward.image = this.dataGame.image
                this.reward.icon = this.dataGame.icon
            } catch(error) {
                console.log("Error loading data: ", error)
            }
        },
        nextContent() {
            const currentState: number = parseInt(localStorage.getItem("current_state") as string)
            const gameState: Game[] = JSON.parse(localStorage.getItem("game_state") as string)
            const defaultGameState: Game = {
                name: "",
                type: "",
                image: "",
                description: "",
                is_open: false,
                is_done: false,
                id: -1
            };
            const currentGameState = gameState.find(game => game.id === this.dataGame.id && game.type === this.dataGame.type && game.name === this.dataGame.name) ?? defaultGameState
            const currentGameStateIndex = gameState.findIndex(game => game.id === this.dataGame.id && game.type === this.dataGame.type && game.name === this.dataGame.name) ?? 0
            if(!currentGameState.is_done) {
                if(gameState[currentGameStateIndex].type == "quiz") gameState[currentGameStateIndex].image = "check_success.png"
                if(gameState[currentGameStateIndex].type == "theory") gameState[currentGameStateIndex].image = "theory_success.png"
                if(gameState[currentGameStateIndex].type == "reward") gameState[currentGameStateIndex].image = "reward_success.png"
                gameState[(currentGameStateIndex + 1)].is_open = true
                if(gameState[(currentGameStateIndex+1)].type == "quiz") gameState[currentGameStateIndex+1].image = "lock_current.png"
                if(gameState[(currentGameStateIndex+1)].type == "theory") gameState[currentGameStateIndex+1].image = "theory_current.png"
                if(gameState[(currentGameStateIndex+1)].type == "reward") gameState[currentGameStateIndex+1].image = "reward_current.png"    
                this.currentState = currentState + 1
                localStorage.setItem("current_state", this.currentState.toString())
                gameState[currentGameStateIndex].is_done = true
                // this.user.condition.gems += this.reward.gems
                // this.user.condition.lives += this.reward.lives
                const gameGift = JSON.parse(localStorage.getItem("game_gift") as string)
                if(gameGift && gameGift.length > 0) {
                    gameGift.push(this.reward)
                    localStorage.setItem("game_gift", JSON.stringify(gameGift))
                } else {
                    localStorage.setItem("game_gift", JSON.stringify([this.reward]))
                }
                localStorage.setItem("user", JSON.stringify(this.user))
                localStorage.setItem("game_state", JSON.stringify(gameState))
            }
            this.$router.push({name: "DashboardPage"})
        },
    }
})
</script>