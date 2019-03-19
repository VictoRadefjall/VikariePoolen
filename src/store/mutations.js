export default {
    setVikarier(state, vikarier) {
      state.vikarier = vikarier;
    },
    setBokningar(state, bokningar) {
      state.bokningar = bokningar;
    },
    setActiveAdmin(state, admin){
      state.activeAdmin = admin;
    },
    reject(state) {
      state.loggedIn = !state.loggedIn;
    }
}
