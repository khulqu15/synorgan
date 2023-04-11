<template>
    <app-layout>
        <template v-slot:content>
            <div class="min-h-screen bg-neutral-focus">
                <div class="bg-primary w-full h-36 mt-16 pt-6 px-6 rouded-2xl text-white rounded-br-2xl rounded-bl-2xl">
                    <div class="flex items-center gap-6">
                        <div class="grow mt-5">
                            <h2 class="font-bold m-0">Sekolah Dasar</h2>
                            <p class="text-sm font-semibold mt-3 leading-none">Belajar organ dalam manusia dan jawab kuis dokter Sio!</p>
                        </div>
                        <div>
                            <button @click="$router.push({name: 'OverviewPage'})" class="btn h-16 relative top-3 btn-primary text-white w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">
                                <Icon class="text-3xl" icon="material-symbols:event-note-outline-rounded" />
                            </button>
                        </div>
                    </div>
                </div>
                <div :key="`state-${current_state}`" class="grid grid-cols-3 pb-24 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-7">
                    <div v-for="(item, index) in levels" :key="`level-${index}`">
                        <div v-if="item.is_open">
                            <label for="modal-start" @click="selectedLevel = index" class="btn btn-ghost p-0 w-20 my-5 h-20 flex mx-auto items-center justify-items-center text-center rounded-full">
                                <img :src="`/assets/icons/${item.image}`" alt="Check Success">
                            </label>
                        </div>
                        <div v-else>
                            <label for="modal-danger" class="btn btn-ghost p-0 w-20 my-5 h-20 flex mx-auto items-center justify-items-center text-center rounded-full">
                                <img :src="`/assets/icons/${item.image}`" alt="Check Success">
                            </label>
                        </div>
                    </div>
                    <div v-if="user.condition.lives > 0">
                        <input type="checkbox" id="modal-start" class="modal-toggle" />
                        <label v-if="levels[selectedLevel]" for="modal-start" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                            <label class="modal-box relative bg-primary" for="">
                                <div class="text-white">
                                    <h3 class="text-lg font-bold">{{ levels[selectedLevel].name }}</h3>
                                    <p class="mb-4">{{ levels[selectedLevel].description }}</p>
                                </div>
                                <button @click="readyToStudy(levels[selectedLevel])" for="modal-start" class="btn mt-3 bg-gray-200 text-gray-600 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-gray-400">
                                    Ayo Mulai
                                </button>
                                <label for="modal-start" class="btn mt-3 bg-primary w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-indigo-800">
                                    Tidak jadi
                                </label>
                            </label>
                        </label>
                        <input type="checkbox" id="modal-danger" class="modal-toggle" />
                        <label for="modal-danger" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                            <label class="modal-box relative bg-red-500" for="">
                                <div class="text-white">
                                    <h3 class="text-lg font-bold">Kamu tidak boleh melompat.</h3>
                                    <p class="mb-4">Belajar sedikit demi sedikit akan lebih baik.</p>
                                </div>
                                <label for="modal-danger" class="btn mt-3 text-white bg-red-500 w-full rounded-xl shadow-[0px_2px_0px_3px] shadow-red-800">
                                    Baik
                                </label>
                            </label>
                        </label>
                    </div>
                    <div v-else>
                        <input type="checkbox" id="modal-start" class="modal-toggle" />
                        <label v-if="levels[selectedLevel]" for="modal-start" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                            <label class="modal-box relative bg-red-500" for="">
                                <div class="text-white">
                                    <h3 class="text-lg font-bold">Maaf, kamu tidak bisa lanjut </h3>
                                    <p class="mb-4">karena nyawa atau hatimu telah habis, tunggu beberapa jam untuk lanjut</p>
                                </div>
                            </label>
                        </label>
                        <input type="checkbox" id="modal-danger" class="modal-toggle" />
                        <label v-if="levels[selectedLevel]" for="modal-danger" class="modal modal-bottom z-50 sm:modal-middle cursor-pointer">
                            <label class="modal-box relative bg-red-500" for="">
                                <div class="text-white">
                                    <h3 class="text-lg font-bold">Maaf, kamu tidak bisa lanjut </h3>
                                    <p class="mb-4">karena nyawa atau hatimu telah habis, tunggu beberapa jam untuk lanjut</p>
                                </div>
                            </label>
                        </label>
                    </div>
                </div>
            </div>
        </template>
    </app-layout>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';
import AppLayout from '@/layouts/AppLayout.vue'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    AppLayout,
    Icon,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedLevel = ref(null);
    const readyToStudy = (data: any) => {
      document.getElementById('modal-start')?.click();
      store.dispatch("setGameData", data);
      router.push({
        name: data.link,
        params: {
          id: data.id,
        },
      });
    };
    return {
      selectedLevel,
      readyToStudy,
    };
  },
  created() {
    this.syncData()
    const itemsString = localStorage.getItem('user');
    if (itemsString) {
        this.user = JSON.parse(itemsString);
    }
  },
  methods: {
    syncData() {
        const gameState = localStorage.getItem("game_state")
        const currentState = localStorage.getItem("current_state")
        if(!gameState) {
            localStorage.setItem("game_state", JSON.stringify(this.levels))
            localStorage.setItem("current_state", "0")
        } else {
            this.levels = JSON.parse(gameState)
            this.current_state = parseInt(currentState as string)
        }
        console.log(this.current_state)
    }
  },
  data() {
    return {
      current_state: 0,
      user: {

      },
      levels: [
        { name: 'Mempelajari Hidung', type: 'theory', icon: 'book.png', image: 'theory_current.png', description: 'Ayo belajar tentang fungsi hidung manusia', is_open: true, link: "GameTheory", is_done: false, id: 1},
        { name: 'Quiz Hidung', type: 'quiz', icon: 'question.png',  image: 'lock.png', description: 'Mengerjakan quiz soal hidung manusia', is_open: false, link: "GameQuiz", is_done: false, id: 1,},
        { name: 'Reward Pertama Kamu', type: 'reward', icon: 'gift-box.png', image: 'reward.png', description: 'Kamu dapat hadiah nih dari dokter hidung', is_open: false, link: "GameReward", is_done: false, id: 1},
        //
        { name: 'Pelajari Faring', type: 'theory', icon: 'book.png', image: 'theory.png', description: 'Ayo belajar tentang fungsi faring manusia !', is_open: false, link: "GameTheory", is_done: false, id: 2},
        { name: 'Quiz Faring', type: 'quiz', icon: 'question.png', image: 'lock.png', description: 'Ayo belajar tentang fungsi faring manusia !', is_open: false, link: "GameQuiz", is_done: false, id: 2},
        { name: 'Hadiah Untuk Kamu', type: 'reward', icon: 'gift-box.png', image: 'reward.png', description: 'Kamu dapat hadiah nih dari dokter faring', is_open: false, link: "GameReward", is_done: false, id: 2},
        //
        { name: 'Pelajari Laring', type: 'theory', icon: 'book.png', image: 'theory.png', description: 'Ayo belajar tentang fungsi laring manusia !', is_open: false, link: "GameTheory", is_done: false, id: 3},
        { name: 'Quiz Laring', type: 'quiz', icon: 'question.png', image: 'lock.png', description: 'Ayo belajar tentang fungsi laring manusia !', is_open: false, link: "GameQuiz", is_done: false, id: 3},
        { name: 'Hadiah Untuk Kamu', type: 'reward', icon: 'gift-box.png', image: 'reward.png', description: 'Kamu dapat hadiah nih dari dokter laring', is_open: false, link: "GameReward", is_done: false, id: 3},
        //
        { name: 'Pelajari Trakea', type: 'theory', icon: 'book.png', image: 'theory.png', description: 'Ayo belajar tentang fungsi trakea manusia', is_open: false, link: "GameTheory", is_done: false, id: 4},
        { name: 'Quiz Trakea', type: 'quiz', icon: 'question.png', image: 'lock.png', description: 'Mengerjakan quiz soal trakea manusia', is_open: false, link: "GameQuiz", is_done: false, id: 4},
        { name: 'Hadiah Untuk Kamu', type: 'reward', icon: 'gift-box.png', image: 'gift.png', description: 'Kamu dapat hadiah nih dari dokter trakea', is_open: false, link: "GameReward", is_done: false, id: 4},
        //
        { name: 'Pelajari Bronkus', type: 'theory', icon: 'book.png', image: 'theory.png', description: 'Ayo belajar tentang fungsi bronkus manusia', is_open: false, link: "GameTheory", is_done: false, id: 5},
        { name: 'Quiz Bronkus', type: 'quiz', icon: 'question.png', image: 'lock.png', description: 'Mengerjakan quiz soal bronkus manusia', is_open: false, link: "GameQuiz", is_done: false, id: 5},
        { name: 'Hadiah Untuk Kamu', type: 'reward', icon: 'gift-box.png', image: 'gift.png', description: 'Kamu dapat hadiah nih dari dokter bronkus', is_open: false, link: "GameReward", is_done: false, id: 5},
        //
        { name: 'Pelajari Bronkiolus', type: 'theory', icon: 'book.png', image: 'theory.png', description: 'Ayo belajar tentang fungsi bronkiolus manusia', is_open: false, link: "GameTheory", is_done: false, id: 6},
        { name: 'Quiz Bronkiolus', type: 'quiz', icon: 'question.png', image: 'lock.png', description: 'Mengerjakan quiz soal bronkiolus manusia', is_open: false, link: "GameQuiz", is_done: false, id: 6},
        { name: 'Hadiah Untuk Kamu', type: 'reward', icon: 'gift-box.png', image: 'gift.png', description: 'Ayo belajar tentang fungsi bronkiolus manusia !', is_open: false, link: "GameReward", is_done: false, id: 6},
        //
        { name: 'Pelajari Alveolus', type: 'theory', icon: 'book.png', image: 'theory.png', description: 'Ayo belajar tentang fungsi alveolus manusia', is_open: false, link: "GameTheory", is_done: false, id: 7},
        { name: 'Quiz Alveolus', type: 'quiz', icon: 'question.png', image: 'lock.png', description: 'Mengerjakan quiz soal alveolus manusia', is_open: false, link: "GameQuiz", is_done: false, id: 7},
        { name: 'Hadiah Untuk Kamu', type: 'reward', icon: 'gift-box.png', image: 'gift.png', description: 'Kamu dapat hadiah nih dari dokter alveolus', is_open: false, link: "GameReward", is_done: false, id: 7},
        //
        { name: 'Pelajari memelihara organ pernafasan', type: 'theory', icon: 'book.png', image: 'theory.png', description: 'Ayo belajar tentang fungsi memelihara organ pernafasan manusia', is_open: false, link: "GameTheory", is_done: false, id: 8},
        { name: 'Quiz memelihara organ pernafasan', type: 'quiz', icon: 'question.png', image: 'lock.png', description: 'Mengerjakan quiz soal memelihara organ pernafasan manusia', is_open: false, link: "GameQuiz", is_done: false, id: 8},
        { name: 'Hadiah Untuk Kamu', type: 'reward', icon: 'gift-box.png', image: 'gift.png', description: 'Kamu dapat hadiah nih dari dokter SiO !', is_open: false, link: "GameReward", is_done: false, id: 8},
        //
        { name: 'Quiz tantangan dokter SiO', type: 'quiz', icon: 'question.png', image: 'training.png', description: 'Mengerjakan quiz dari dokter SiO', is_open: false, link: "GameQuiz", is_done: false, id: 9},
        //
        { name: 'Soal ujian dari dokter SiO', type: 'quiz', icon: 'question.png', image: 'training.png', description: 'Mengerjakan ujian dari dokter SiO', is_open: false, link: "GameQuiz", is_done: false, id: 10},
        { name: 'Selamat, kamu berhasil', type: 'reward', icon: 'gift-box.png', image: 'gift.png', description: 'Kamu dapat hadiah nih dari dokter SiO !', is_open: false, link: "GameReward", is_done: false, id: 10},
    ]
    };
  },
});
</script>

<style scoped>
.levels {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}
</style>