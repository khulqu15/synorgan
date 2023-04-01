import { createStore } from 'vuex';

interface State {
  gameData: any;
}

export default createStore<State>({
  state: {
    gameData: '',
  },
  mutations: {
    setGameData(state, newGameData: any) {
      state.gameData = newGameData;
    },
  },
  actions: {
    setGameData({ commit }, newGameData: any) {
      commit('setGameData', newGameData);
    },
  },
  getters: {
    gameData: (state) => state.gameData,
  },
});
