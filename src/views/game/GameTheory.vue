<template>
    <ion-page>
        <div class="flex bg-base-100 p-4 fixed top-0 z-50 w-full items-center gap-x-4 justify-items-between justify-start">
            <div>
                <button @click="prevContent()" class="btn btn-ghost">
                    <Icon class="text-xl" :icon="progressBar == 0 ? 'humbleicons:times' : 'material-symbols:chevron-left'"/>
                </button>
            </div>
            <div class="grow">
                <progress :key="`value-${progressBar}`" class="progress progress-primary w-full" :value="progressBar" max="100"></progress>
            </div>
            <div>
                <button class="btn btn-ghost">
                    <div class="flex items-center gap-2">
                        <img src="assets/icons/heart.png" class="w-6" alt="">
                        <h6 class="m-0 font-bold">{{ user.condition.lives }}</h6>
                    </div>
                </button>
            </div>
        </div>
        <ion-content>
            <div class="min-h-screen w-full p-6 grid bg-base-100 grid-cols-1 py-24 justify-start">
                <div class="content" v-if="pages.length > 0">
                    <div class="flex items-center gap-x-2 mb-4">
                        <img :src="`/assets/icons/${dataGame.icon}`" v-if="dataGame.icon" class="w-8" :alt="dataGame.icon">
                        <h5 class="m-0 font-semibold text-primary" v-if="dataGame.name">{{ dataGame.name }}</h5>
                    </div>
                    <div class="w-full rounded-xl mb-8 overflow-hidden p-0">
                        <img :src="`/assets/content/${pages[currentState].image}`" class="h-full h-full object-cover object-center" alt="">                        
                    </div>
                    <div class="w-full p-5 pt-10 rounde-xl bg-base-200 text-base-content border-2 border-base-300 rounded-xl relative">
                        <div class="inline-block bg-primary px-4 py-2 rounded-xl absolute -top-5 left-0">
                            <h4 class="font-bold text-white m-0">{{ pages[currentState].title }}</h4>
                        </div>
                        <p v-html="pages[currentState].description"></p>
                    </div>
                </div>
                <div class="fixed bg-base-100 w-full bottom-0 p-6 left-0">
                    <button @click="nextContent()" class="btn btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">
                        {{ progressBar == 100 ? "Selesaikan" : "Selanjutnya" }}
                    </button>
                </div>
            </div>
        </ion-content>
        <input type="checkbox" id="modal-back" class="modal-toggle" />
        <label for="modal-back" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
            <label class="modal-box relative bg-red-500" for="">
                <div class="text-white">
                    <h3 class="text-lg font-bold">Kamu mau keluar ?</h3>
                    <p class="mb-4">Belajar dengan serius membuatmu lebih pintar.</p>
                </div>
                <button @click="forceExit()" class="btn mt-3 bg-red-500 text-white w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-800">
                    Saya mau keluar
                </button>
                <label for="modal-back" class="btn mt-3 bg-red-500 text-white w-full rounded-xl">
                    Tidak jadi
                </label>
            </label>
        </label>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'
import { Icon } from '@iconify/vue'
import { useStore } from 'vuex'
import { Game } from '@/interfaces/game.interfaces'

export default defineComponent({
    props: ["data"],
    components: {
        IonPage, IonContent, Icon
    },
    data() {
        return {
            listsCase: ["nose", "pharynx", "larynx", "trachea", "bronchi", "bronchioles", "alveoli", "breathing"],
            currentState: 0,
            progressBar: 0,
            dataGame: {
                name: "",
                is_done: false,
                id: 0,
                type: 'quiz'
            },
            case: "Hidung",
            credentialAccess: false,
            user: {},
            pages: []
        }
    },
    mounted() {
        this.progressBar = 0
    },
    created() {
        const store = useStore()
        const paramId: any = parseInt(this.$route.params.id as string)
        const getData = computed(() => store.getters['gameData']);
        this.dataGame = getData.value
        const itemsString = localStorage.getItem('user')
        if (itemsString) {
            this.user = JSON.parse(itemsString);
        }
        this.case = this.listsCase[(paramId - 1)];
        this.loadJsonData(this.case);
    },
    beforeRouteLeave(to, from, next) {
        if (from.name === "gameTheory") {
            if(this.progressBar < 100) {
                if(!this.credentialAccess) {
                    document.getElementById("modal-back")?.click()
                    return false
                }
            }
            next()
        } else {
            next();
        }
    },
    methods: {
        async loadJsonData(caseName: string) {
            try {
                const response = await fetch(`/data/${caseName}/theory.json`)
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const jsonData = await response.json()
                this.pages = jsonData
            } catch(error) {
                console.log("Error loading data: ", error)
            }
        },
        prevContent() {
            if(this.progressBar == 0) {
                document.getElementById("modal-back")?.click()
            } else {
                const step: number = 100 / (this.pages.length - 1)
                this.progressBar -= step
                this.currentState -= 1
            }
        },
        forceExit() {
            this.credentialAccess = !this.credentialAccess
            this.$router.go(-1)
        },
        nextContent() {
            if(this.progressBar >= 100) {
                const currentState: number = parseInt(localStorage.getItem("current_state") as string)
                const defaultGameState: Game = {
                    name: "",
                    type: "",
                    image: "",
                    description: "",
                    is_open: false,
                    is_done: false,
                    id: -1
                };
                const gameState: Game[] = JSON.parse(localStorage.getItem("game_state") as string)
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
                    console.log(gameState[currentGameStateIndex].is_done)
                    this.currentState = (currentState + 1)
                    localStorage.setItem("current_state", this.currentState.toString())
                    gameState[currentGameStateIndex].is_done = true
                    console.log(this.currentState)
                }
                localStorage.setItem("game_state", JSON.stringify(gameState))
                this.$router.push({name: 'DashboardPage'})
            } else {
                const step: number = 100 / (this.pages.length - 1)
                this.progressBar += step
                this.currentState += 1
            }
        }
    }
})
</script>