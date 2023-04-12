<template>
    <ion-page>
        <ion-content>
            <div class="bg-base-100 text-base-content">
                <div  v-if="!welcome && !closing" class="flex bg-base-100 p-4 fixed top-0 z-50 w-full items-center gap-x-4 justify-items-between justify-start">
                    <div>
                        <button @click="prevContent()" class="btn btn-ghost">
                            <Icon class="text-xl" :icon="progressBar == 0 ? 'humbleicons:times' : 'material-symbols:chevron-left'"/>
                        </button>
                    </div>
                    <div class="grow">
                        <progress :key="`value-${progressBar}`" class="progress progress-primary w-full" :value="progressBar" max="100"></progress>
                    </div>
                    <div :key="`heart-${progressBar}`">
                        <button class="btn btn-ghost">
                            <div class="flex items-center gap-2">
                                <img src="assets/icons/heart.png" class="w-6" alt="">
                                <h6 class="m-0 font-bold">{{ currentLives }}</h6>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="min-h-screen w-full p-6 grid grid-cols-1 py-24 justify-start">
                    <div v-if="welcome" class="text-center w-3/4 mx-auto py-12 space-y-4">
                        <img src="/assets/starting.svg" class="w-full" alt="Starting">
                        <h2 class="text-primary font-bold">Selamat memulai quiz, semangat ya!</h2>
                        <p class="text-base-content">Jangan takut untuk salah, yang terpenting adalah semangat dan belajar dari kesalahan.</p>
                        <RadialProgress :totalTime="radialProgress.time" :message="radialProgress.message" />
                    </div>
                    <div v-if="closing" class="text-center w-3/4 mx-auto py-12 space-y-4">
                        <img :src="`/assets/${result.image}`" class="w-full" alt="Starting">
                        <h2 class="text-primary font-bold">{{ result.title }}</h2>
                        <p class="text-base-content">{{ result.description }}</p>
                        <div class="fixed w-full bottom-0 p-6 left-0">
                            <button @click="$router.push({name: 'DashboardPage'})" class="btn mt-3 w-full rounded-xl shadow-[0px_2px_0px_3px] btn-primary shadow-indigo-800">
                                Lanjutkan
                            </button>
                        </div>
                    </div>
                    <div v-if="!welcome && !closing">
                        <div :key="`state-${click_iteration}`" class="content" v-if="pages.length > 0 && pages[currentState]">
                            <div class="flex items-center gap-x-2 mb-4">
                                <img :src="`/assets/icons/${dataGame.icon}`" class="w-8" :alt="dataGame.icon">
                                <h5 class="m-0 font-semibold text-primary" v-if="dataGame.name">{{ dataGame.name }}</h5>
                            </div>
                            <div v-html="pages[currentState].title"></div>
                            <div v-if="pages[currentState].answers && pages[currentState].answers.length > 0" class="space-y-3">
                                <div @click="selectedAnswer(item, index)" v-for="(item, index) in pages[currentState].answers" :key="`option-${currentState}-${index}`" 
                                class="w-full transition-all p-4 rounde-xl bg-base-200 border-2 gap-x-3 border-base-300 rounded-xl relative flex items-center"
                                :class="{'bg-primary text-white shadow-xl border-0': selectedOption === index}">
                                    <div>
                                        <h6 class="m-0 font-bold text-primary" :class="{'text-white': selectedOption === index}">{{ integerToAlphabet(index) }}.</h6>
                                    </div>
                                    <div>
                                        <p class="m-0">{{ item.option }}.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="checkbox" id="modal-true" class="modal-toggle" />
                        <div v-if="selectedOption != null" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                            <div class="modal-box relative bg-base-100">
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
                            <div class="modal-box relative bg-base-100">
                                <div class="text-red-500">
                                    <h3 class="text-lg font-bold">Jawaban Kamu Salah !</h3>
                                    <p class="mb-4">Jawaban yang benar: <b>{{ findCorrectAnswer(pages[currentState].answers).option }}</b></p>
                                </div>
                                <button @click="forceNextContent()" class="btn mt-3 bg-red-500 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-700">
                                    Lanjutkan
                                </button>
                            </div>
                        </div>
                        <div class="fixed bg-base-100 w-full bottom-0 p-6 left-0">
                            <button @click="nextContent()" class="btn w-full rounded-xl shadow-[0px_2px_0px_3px]"
                            :class="{'btn shadow-gray-500': selectedOption === null, 'btn-primary shadow-indigo-800': selectedOption !== null}">
                                {{ progressBar == 100 ? "Selesaikan" : "Selanjutnya" }}
                            </button>
                        </div>
                    </div>
                </div>
                <input type="checkbox" id="modal-back" class="modal-toggle" />
                <label for="modal-back" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                    <label class="modal-box relative bg-red-500" for="">
                        <div class="text-white">
                            <h3 class="text-lg font-bold">Kamu mau keluar ?</h3>
                            <p class="mb-4">Belajar dengan serius membuatmu lebih pintar.</p>
                        </div>
                        <button @click="forceExit()" class="btn mt-3 text-white bg-red-500 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-800">
                            Saya mau keluar
                        </button>
                        <label for="modal-back" class="btn text-white mt-3 bg-red-500 w-full rounded-xl">
                            Tidak jadi
                        </label>
                    </label>
                </label>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'
import { Icon } from '@iconify/vue'
import { useStore } from 'vuex'
import RadialProgress from '@/components/RadialProgress.vue'
import { Game } from '@/interfaces/game.interfaces'

export default defineComponent({
    props: ["data"],
    components: {
        IonPage, IonContent, Icon, RadialProgress
    },
    data() {
        return {
            welcome: true,
            closing: false,
            listsCase: ["nose", "pharynx", "larynx", "trachea", "bronchi", "bronchioles", "alveoli", "breathing", "predicate", "best_predicate"],
            currentState: 0,
            progressBar: 0,
            radialProgress: {
                time: 5,
                message: "Sebentar yaa..."
            },
            selectedOption: null as number | null,
            dataGame: {
                name: "",
                is_done: false,
                id: 0,
                type: 'quiz'
            },
            result: {
                image: 'winner.svg',
                title: 'Horree',
                description: 'Horree kamu menang'
            },
            currentScore: 0,
            click_iteration: 0,
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
        setTimeout(() => {
            this.welcome = false
        }, 5000)
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
            const modal_true = document.getElementById("modal-true") as HTMLInputElement
            const modal_false = document.getElementById("modal-false") as HTMLInputElement
            if(modal_true.checked) {
                modal_true.checked = !modal_true.checked
            }
            if(modal_false.checked) {
                modal_false.checked = !modal_false.checked
            }
            if(this.selectedOption != null) {
                const step: number = 100 / (this.pages.length)
                const selectedAnswer = this.pages[this.currentState].answers[this.selectedOption]
                console.log(selectedAnswer)
                if(selectedAnswer.is_true) {
                    console.log("Selected")
                    console.log(selectedAnswer)
                    document.getElementById("modal-true")?.click()
                    const audio = new Audio('/sound/correct.mp3')
                    audio.play()
                    this.isAnswerTrue = true
                    this.currentScore += 1
                    console.log("True")
                    this.progressBar += step
                } else {
                    document.getElementById("modal-false")?.click()
                    const audio = new Audio('/sound/wrong.mp3')
                    audio.play()
                    this.isAnswerTrue = false
                    this.currentLives -= 1
                    console.log("False")
                }
            }
        },
        selectedAnswer(item: any, index: number) {
            this.click_iteration += 1
            this.selectedOption = index
            console.log(this.selectedOption)
        },
        nextContent() {
            this.click_iteration += 1
            this.answerSelection()
            console.log('CurrentState:' + this.currentState)
            console.log('Pages Length:' + (this.pages.length - 2))
            if(this.selectedOption != null) {
                if(this.currentState >= (this.pages.length - 1)) {
                    this.user.condition.gems = this.currentScore
                    this.user.condition.lives = this.currentLives
                    let currentState: number = parseInt(localStorage.getItem("current_state") as string)
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
                        
                        currentState += 1
                        localStorage.setItem("current_state", currentState.toString())
                        gameState[currentGameStateIndex].is_done = true
                    }
                    localStorage.setItem("user", JSON.stringify(this.user))
                    localStorage.setItem("game_state", JSON.stringify(gameState))
                } 
            }
        },
        forceNextContent() {    
            if(this.isAnswerTrue) document.getElementById("modal-true")?.click()
            else document.getElementById("modal-false")?.click()
            this.selectedOption = null
            console.log(this.progressBar)
            if(this.progressBar >= 100 || this.currentState >= (this.pages.length - 1)) {
                if(this.progressBar >= 100) {
                    this.result.image = 'winner.svg'
                    this.result.title = 'Keren, Selamat yaa..'
                    this.result.description = 'kamu telah berhasil menyelesaikan quiz ini dengan cepat dan benar. Terus jaga semangat belajarmu ya!'
                    const audio = new Audio('/sound/win.mp3')
                    audio.play()
                } else if(this.progressBar < 100) {
                    this.result.image = 'lose.svg'
                    this.result.title = 'Yahh, Kamu gagal yaa..'
                    this.result.description = 'Tetap semangat dan jangan mudah menyerah meskipun belum berhasil, terus berusaha!'
                    const audio = new Audio('/sound/gameover.mp3')
                    audio.play()
                }
                this.closing = true

            }
            else this.currentState += 1
        }
    }
})
</script>