import { GET_NAVS } from './action-types';
import { getProfessionNav } from '@/api/profession';

export default {
  state: {
    navs: [],
  },
  mutations: {
    [GET_NAVS](state, payload) {
      state.navs = payload;
    }
  },
  actions: {
    async [GET_NAVS]({ commit }) {
      let professionNav = await getProfessionNav();
      commit(GET_NAVS, professionNav);
    }
  },
}