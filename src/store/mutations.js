export default {
    setVikarier(state, vikarier) {
      state.vikarier = vikarier;
    },
    setBokningar(state, bokningar) {
      state.bokningar = bokningar;
    },
    removeVikarie(state, vikarie) {
      state.vikarier.splice(state.vikarier.indexOf(vikarie), 1)
      console.log(vikarie);
  }
}