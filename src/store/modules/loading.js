/**
 * Loading status
 */

const state = {
  isLoading: false,
};

const updateLoadingStatus = (state, payload) => {
  state.isLoading = payload.isLoading || false;
};

const mutations = {
  updateLoadingStatus,
};

const actions = {
  updateLoading(context, payload) {
    context.commit('updateLoadingStatus', payload);
  },
};

const getters = {
  getLoadingStatus(state) {
    return state.isLoading;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};