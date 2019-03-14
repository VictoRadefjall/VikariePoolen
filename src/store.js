import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vikarier: [],
    kommuner: ['Kungälv', 'Lerum', 'Partille', 'Mölndal', 'Göteborg', 'Öckerö', 'Tjörn', 'Kungsbacka'],
    amnen: ['Svenska', 'Engelska', 'Matematik', 'Samhällskunskap', 'Naturkunskap', 'Teknik', 'Idrott', 'Slöjd', 'Elevassistent', 'Musik', 'Språk', 'Bild'],
    klasser: ['Grundskola', 'Förskola', 'Gymnasium']
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
