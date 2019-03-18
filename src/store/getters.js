export default {
    vikarier (state) {
      return state.vikarier;
    },
    bokningar(state) {
      return state.bokningar;
    },
    getVikarieById(state){
      return(vikarieId) => {
        return state.vikarier.filter(vikarie => vikarie._id == vikarieId)[0];
      }
    },
    bookedVikarier(state) {
      return state.vikarier.filter(vikarie => !vikarie.ledig)
    },
}