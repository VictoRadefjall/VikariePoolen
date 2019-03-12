import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vikarier: [],
    kommuner: ['Kungälv', 'Lerum', 'Partille', 'Mölndal', 'Göteborg', 'Öckerö', 'Tjörn', 'Kungsbacka'],
    amnen: ['Svenska', 'Engelska', 'Matematik', 'Samhällskunskap', 'Naturkunskap', 'Teknik', 'Idrott', 'Slöjd', 'Elevassistent', 'Musik', 'Språk', 'Bild'],
    klass: ['Grundskola', 'Förskola', 'Gymnasium']
  },
  mutations: {
    setVikarier(state, vikarier) {
      state.vikarier = vikarier
    }
  },
  actions: {
    async getVikarier(ctx) {
 //     let vikarier = await axios.get('http://localhost:3000/vikarier');
  //    ctx.commit('setVikarier', vikarier.data);
  //    console.log(vikarier.data)
    }
  }
})
