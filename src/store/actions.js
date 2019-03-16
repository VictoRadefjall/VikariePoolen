import axios from 'axios'

export default {
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
    },
    removeVikarie(id) {
      return axios.delete(`http://localhost:3000/vikarier/${id}`)
    },
    deleteVikarie(ctx, vikarie) {
      let vikarier = this.state.vikarier;
      vikarier.splice(vikarier.findIndex(v => v.id == vikarie.id), 1);
      ctx.commit('removedProducts', vikarier)
    },
}
