<template>
    <ion-page>
        <div class="flex p-4 fixed top-0 z-50 w-full items-center gap-x-4 justify-items-between justify-start">
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
                        <h6 class="m-0 text-gray-600 font-bold">{{ currentLives }}</h6>
                    </div>
                </button>
            </div>
        </div>
        <ion-content>
            <div :key="`state-${currentState}`" class="min-h-screen w-full p-6 grid grid-cols-1 pt-24 justify-start">
                <div class="content" v-if="pages.length > 0 && pages[currentState]">
                    <div class="flex items-center gap-x-2 mb-4">
                        <img :src="`/assets/icons/${dataGame.icon}`" class="w-8" :alt="dataGame.icon">
                        <h5 class="m-0 font-semibold text-primary" v-if="dataGame.name">{{ dataGame.name }}</h5>
                    </div>
                    <!-- <div class="w-full rounded-xl mb-8 overflow-hidden p-0">
                        <img v-if="pages[currentState].image" :src="`/assets/content/${pages[currentState].image}`" class="h-full h-full object-cover object-center" alt="">                        
                    </div> -->
                    <div v-html="pages[currentState].title"></div>
                    <div v-if="pages[currentState].answers && pages[currentState].answers.length > 0" class="space-y-3">
                        <div @click="selectedOption = index" v-for="(item, index) in pages[currentState].answers" :key="`option-${currentState}-${index}`" 
                        class="w-full transition-all p-4 rounde-xl bg-gray-100 border-2 gap-x-3 border-gray-00 rounded-xl relative flex items-center"
                        :class="{'bg-primary text-white shadow-xl border-0': selectedOption === index}">
                            <div>
                                <h6 class="m-0 font-bold text-primary" :class="{'text-white': selectedOption === index}">{{ integerToAlphabet(index) }}.</h6>
                            </div>
                            <div>
                                <p class="m-0">{{ item.option }}.</p>
                            </div>
                        </div>
                    </div>
                    <input type="checkbox" id="modal-true" class="modal-toggle" />
                    <div v-if="selectedOption != null" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                        <div class="modal-box relative bg-white">
                            <div class="text-green-500">
                                <h3 class="text-lg font-bold">Hore Benar.. Kamu Hebatt !</h3>
                                <p class="mb-4">Jawaban kamu benar: <b>{{ pages[currentState].answers[selectedOption].option }}</b></p>
                            </div>
                            <button @click="forceNextContent()" class="btn mt-3 bg-green-500 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-green-700">
                                Lanjutkan
                            </button>
                        </div>
                    </div>
                    <input type="checkbox" id="modal-false" class="modal-toggle" />
                    <div v-if="selectedOption != null" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                        <div class="modal-box relative bg-white">
                            <div class="text-red-500">
                                <h3 class="text-lg font-bold">Jawaban Kamu Salah !</h3>
                                <p class="mb-4">Jawaban yang benar: <b>{{ findCorrectAnswer(pages[currentState].answers).option }}</b></p>
                            </div>
                            <button @click="forceNextContent()" class="btn mt-3 bg-red-500 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-700">
                                Lanjutkan
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fixed w-full bottom-0 p-6 left-0">
                    <button @click="nextContent()" class="btn mt-3 btn-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">
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
                <button @click="forceExit()" class="btn mt-3 bg-red-500 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-800">
                    Saya mau keluar
                </button>
                <label for="modal-back" class="btn mt-3 bg-red-500 w-full rounded-xl">
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
            listsCase: ["nose", "pharynx", "larynx", "trachea", "bronchi", "bronchioles", "alveoli", "breathing", "predicate", "best_predicate"],
            currentState: 0,
            progressBar: 0,
            selectedOption: null,
            dataGame: {
                name: "",
                is_done: false,
                id: 0,
                type: 'quiz'
            },
            currentScore: 0,
            currentLives: 5,
            isAnswerTrue: false,
            case: "Hidung",
            credentialAccess: false,
            user: {
                condition: {
                    gems: 0,
                    lives: 0,
                }
            },
            pages: [{
                title: "",
                answers: [{is_true: false, option: "This option"}]
            }]
        }
    },
    beforeUnmount() {
        window.removeEventListener('beforeunload', this.preventReload)
    },
    mounted() {
        this.progressBar = 0
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
            this.currentScore = this.user.condition.gems
            this.currentLives = this.user.condition.lives
        }
        this.case = this.listsCase[(paramId - 1)];
        this.loadJsonData(this.case);
    },
    beforeRouteLeave(to, from, next) {
        window.removeEventListener('beforeunload', this.preventReload)
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
        preventReload(event: BeforeUnloadEvent) {
            event.preventDefault()
            event.returnValue = ''
            return false
        },
        async loadJsonData(caseName: string) {
            try {
                const response = await fetch(`/data/${caseName}/quiz.json`)
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const jsonData = await response.json()
                this.pages = this.shuffleData(jsonData)
                this.pages.forEach((item, index) => {
                    this.pages[index].answers = this.shuffleData(this.pages[index].answers)
                });
            } catch(error) {
                console.log("Error loading data: ", error)
            }
        },
        shuffleData(array: any[]): any[] {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
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
        integerToAlphabet(index: number): string {
            const alphaNumber: number = index + 1
            return String.fromCharCode(alphaNumber + 64)
        },
        replaceThreeDots(value: string): string {
            if(value) return value.replace("...", "")
            return ""
        },
        findCorrectAnswer(answers: Array<{option: string; is_true: boolean}>) {
            const correctAnswer = answers.find((answer) => answer.is_true === true)
            return correctAnswer ? correctAnswer : { option: 'Not found', is_true: false }
        },
        answerSelection() {
            if(this.selectedOption) {
                const selectedAnswer = this.pages[this.currentState].answers[this.selectedOption]
                if(selectedAnswer.is_true) {
                    this.isAnswerTrue = true
                    this.currentScore += 1
                    console.log("True")
                    document.getElementById("modal-true")?.click()
                } else {
                    this.isAnswerTrue = false
                    this.currentLives -= 1
                    console.log("False")
                    document.getElementById("modal-false")?.click()
                }
            }
        },
        nextContent() {
            if(this.selectedOption != null) {
                const step: number = 100 / (this.pages.length)
                if(this.progressBar < 100) this.progressBar += step
                if(this.progressBar >= 100) {
                    this.answerSelection()
                    this.user.condition.gems = this.currentScore
                    this.user.condition.lives = this.currentLives
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
                    }
                    localStorage.setItem("user", JSON.stringify(this.user))
                    localStorage.setItem("game_state", JSON.stringify(gameState))
                } else {
                    this.answerSelection()
                }
            }
        },
        forceNextContent() {    
            if(this.isAnswerTrue) document.getElementById("modal-true")?.click()
            else document.getElementById("modal-false")?.click()
            this.selectedOption = null
            console.log(this.progressBar)
            if(this.progressBar >= 100) this.$router.push({name: 'DashboardPage'})
            else this.currentState += 1
        }
    }
})
</script>