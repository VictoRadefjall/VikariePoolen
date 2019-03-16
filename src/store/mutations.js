export default {
    setVikarier(state, vikarier) {
      state.vikarier = vikarier;
    },
    setBokningar(state, bokningar) {
      state.bokningar = bokningar;
    },
    removedVikarie(state, array) {
      state.vikarier = array
    },
  }