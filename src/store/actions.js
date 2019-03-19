import axios from 'axios'

export default {
    async getVikarier(ctx) {
      console.log('ARIBA!!')
      let vikarier = await axios.get(`${ctx.state.apiUrl}/vikarier`);
      console.log(vikarier);
      ctx.commit('setVikarier', vikarier.data);
    },
    async getBokningar(ctx) {
      let bokningar = await axios.get(`${ctx.state.apiUrl}/bokningar`);
      ctx.commit('setBokningar', bokningar.data);
    },
    async skapaVikarie(data, nyVikarie) {
      try {
        console.log(data, nyVikarie)
        await axios.post(`${data.state.apiUrl}/vikarier`, nyVikarie);
        data.dispatch('getVikarier');
      }
      catch(err) {
        console.error(err);
      }
    },
    async skapaBokning(data, nyBokning) {
      try {
        console.log(nyBokning)
        await axios.post(`${data.state.apiUrl}/bokningar`, nyBokning);
        data.dispatch('getBokningar');
      }
      catch(err) {
        console.error(err);
      }
    },
    async removeVikarie(ctx, id) {
      await axios.delete(`${ctx.state.apiUrl}/vikarier` + id);
      ctx.commit('removeVikarie', id);
    }
}
