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
    activeVikarier(state) {
      return state.vikarier.filter(vikarie => vikarie.ledig)
    },
    oldBookings(state) {
      return state.bokningar.filter(bokning => new Date(bokning.datum.till).getUnixTime() <= state.today.toFixed());
    },
    currentBookings(state) {
      return state.bokningar.filter(bokning => new Date(bokning.datum.till).getUnixTime() >= state.today.toFixed())
    },
};