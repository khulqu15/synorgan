import { InjectionKey } from 'vue';
import { Store } from 'vuex';

export interface State {
  gameData: string;
}

export const key: InjectionKey<Store<State>> = Symbol();