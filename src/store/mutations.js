export default {
    setVikarier(state, vikarier) {
      state.vikarier = vikarier;
    },
    setBokningar(state, bokningar) {
      state.bokningar = bokningar;
    },
    removeVikarie(state, vikarie) {
      state.vikarier.splice(state.vikarier.indexOf(vikarie), 1)
  }, 
  // updateVikarie(state, data){
  //   // Hitta rätt vikarie
  //     state.vikare.push(state.vikarier.indexOf(vikarie), 1)
  //   // pusha in data i kommun

  // }
}