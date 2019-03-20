import axios from 'axios';
import router from '../router'

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
        // skapar bokning
    async skapaBokning(data, nyBokning) {
      try {
      
        await axios.post(`${data.state.apiUrl}/bokningar`, nyBokning);
        data.dispatch('getBokningar');
      }
      catch(err) {
        console.error(err);
      }
    },
         // avbokar en vikarie
    async removeVikarie(ctx, id) {
      try {
        await axios.delete(`${ctx.state.apiUrl}/vikarier/` + id);
        await ctx.dispatch('getVikarier');
        console.log('Användare borttagen.')
      }
      catch(err) {
        console.error(err);
      }
    },
         // raderar en vikarie
    async deleteBokning(ctx, id) {
      try {
        await axios.delete(`${ctx.state.apiUrl}/bokningar/` + id);
        await ctx.dispatch('getBokningar')
        console.log('Bokning borttagen.');
      }
      catch(err) {
        console.error(err);
      }
    },
  // login admin
    async login(ctx, loginData){
      try {
        let token = await axios.post(`${ctx.state.apiUrl}/auth`, loginData)
        sessionStorage.setItem('authAdmin', token.data.authToken);
        
        router.push('/panel');

        // Uppdatera för UI
       ctx.commit('setActiveAdmin', token.data.username);

      } catch(err) {

        ctx.commit('reject');
        
        setTimeout(()=>{
          ctx.commit('reject');
           console.log(err);
        },1000)
    
        console.error(err);      
      } 
      
      
    }
  }

