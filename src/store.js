import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vikarier: [],
    bokningar: [],
    bokning: {}, 
    kommuner: ['Alla', 'Kungälv', 'Lerum', 'Partille', 'Mölndal', 'Göteborg', 'Öckerö', 'Tjörn', 'Kungsbacka'],
    amnen: ['Alla', 'Svenska', 'Engelska', 'Matematik', 'Samhällskunskap', 'Naturkunskap', 'Teknik', 'Idrott', 'Slöjd', 'Elevassistent', 'Musik', 'Språk', 'Bild'],
    klasser: ['Alla', 'Grundskola', 'Förskola', 'Gymnasium']
  },
  mutations: {
    setVikarier(state, vikarier) {
      state.vikarier = vikarier;
    },
    setBokningar(state, bokningar) {
      state.bokningar = bokningar;
    }
  },
  actions: {
    async getVikarier(ctx) {
      let vikarier = await axios.get('http://localhost:3000/vikarier');
      ctx.commit('setVikarier', vikarier.data);
    },
    async getBokningar(ctx) {
      let bokningar = await axios.get('http://localhost:3000/bokningar');
      ctx.commit('setBokningar', bokningar.data);
    },
    async skapaVikarie(data, nyVikarie) {
      try {
        console.log(data, nyVikarie)
        await axios.post('http://localhost:3000/vikarier', nyVikarie);
        data.dispatch('getVikarier');
      }
      catch(err) {
        console.error(err);
      }
    },
    async skapaBokning(data, nyBokning) {
      try {
        console.log(data, nyBokning)
        await axios.post('http://localhost:3000/bokningar', nyBokning);
        data.dispatch('getBokningar');
      }
      catch(err) {
        console.error(err);
      }
    }
  },
  getters: {
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
    }

  }

})
