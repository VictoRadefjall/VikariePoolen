import axios from 'axios';

export default {

    async getVikarier(ctx) {
      let vikarier = await axios.get(`${ctx.state.apiUrl}/vikarier`);
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
        
        await axios.post(`${data.state.apiUrl}/bokningar`, nyBokning);
        data.dispatch('getBokningar');
      }
      catch(err) {
        console.error(err);
      }
    },

    async removeVikarie(ctx, id) {
      try {
        await axios.delete('http://localhost:3000/vikarier/' + id);
        await ctx.dispatch('getVikarier');
        console.log('Användare borttagen.')
      }
      catch(err) {
        console.error(err);
      }
    },

    async login(ctx, loginData){
      try {
        let token = await axios.post('http://localhost:3000/auth', loginData)
        console.log(token);
        sessionStorage.setItem('authAdmin', token.data.authToken);
        
        // Uppdatera för UI
        ctx.commit('setActiveAdmin', token.data.username);

      } catch(err) {

        ctx.commit('reject');
        setTimeout(()=>{
          ctx.commit('reject');
        }, 1000)

        console.error(err);      
      }
    },
}
