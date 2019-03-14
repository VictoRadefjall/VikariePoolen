import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vikarier: [],
    kommuner: ['Alla', 'Kungälv', 'Lerum', 'Partille', 'Mölndal', 'Göteborg', 'Öckerö', 'Tjörn', 'Kungsbacka'],
    amnen: ['Alla', 'Svenska', 'Engelska', 'Matematik', 'Samhällskunskap', 'Naturkunskap', 'Teknik', 'Idrott', 'Slöjd', 'Elevassistent', 'Musik', 'Språk', 'Bild'],
    klasser: ['Alla', 'Grundskola', 'Förskola', 'Gymnasium']
  },
  mutations: {
    setVikarier(state, vikarier) {
      state.vikarier = vikarier
    }
  },
  actions: {
    async getVikarier(ctx) {
      let vikarier = await axios.get('http://localhost:3000/vikarier');
      ctx.commit('setVikarier', vikarier.data);
    }
  },
  getters: {
    vikarier(state) {
      return state.vikarier;
    },
    getVikarieById(state) {
      return (vikarieId) => {
        return state.vikarier.filter(vikarie => vikarie._id == vikarieId)[0];
      }
    },
    
  }
})
