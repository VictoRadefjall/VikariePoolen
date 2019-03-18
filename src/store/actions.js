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
    async removeVikarie(ctx, id) {
      await axios.delete('http://localhost:3000/vikarier/' + id);
      ctx.commit('removeVikarie', id);
    },
    async login(ctx, loginData){
 
      try {
        let token = await axios.post('http://localhost:3000/auth', loginData)
        console.log(token);

        sessionStorage.setItem('authAdmin', token.data.authToken);
        
        // Uppdatera för UI
        ctx.commit('setActiveAdmin', token.data.username);

      } catch(err) {
        console.error(err);      
      }
    },
}
