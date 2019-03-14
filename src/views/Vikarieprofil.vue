<template>
    <main id="boka">
      <div class="profil">
          <h1>Profil</h1>
          <h2> {{ vikarie.namn }} </h2>
          <img class="vikarie-bild" src="../assets/avatar.png" alt="avatar"/>

      <section class="information">
          <article>
           <p>
               Ämne :
           <span> {{vikarie.amne.toString()}}  </span> <br>
           </p> 
           <p>
               Kommun: 
               <span v-if="vikarie.kommun">
                   {{vikarie.kommun.toString()}}
              </span> <br>
              </p>  
              <p> 
                  Utbildning: 
                  <span v-if="vikarie.klass">
                      {{vikarie.klass.toString()}}
                 </span> <br>
                </p>      
          </article>
      </section>  

        <footer>
           <p class="input-bokare"> Bokare <input type="text" placeholder="Bokare"></p>
           <p class="input-bokare"> Plats <input type="text" placeholder="Plats"></p>
           <a href="#" @click="toggle">Boka</a>
        </footer>
      </div>

    </main>
</template>



<script>
import confirm from '@/components/Confirm';

export default {
    name: 'vikarieprofil',
    computed: {
        vikarie() {
          return this.$store.getters.getVikarieById(this.$route.params.id);
        },
    },
    components: {
        confirm
    },
    data(){
        return {
            active: false
        }
    },
    methods: {
        toggle(){
            console.log('It works!')
            this.active = !this.active;
        }
    }
   
}
</script>





<style lang="scss">
@import '../scss/main.scss';


    #boka {
      flex-direction: column;
      @extend %center;
      background: white;
      max-width: 420px;
      width: 100vw;
      height: 40rem;

      .information{
        column-count: 3;
        column-gap: 1rem;
        column-rule-style: solid;
        column-rule-width: 1px;
        column-rule-color: #BFDE8E;
        width: 100%;
      }

    .vikarie-bild {
        width: 10rem;
        border-radius: 9999rem;
        background: linear-gradient(orange, white);
        display: flex;
      }

      .information{
        column-count: 3;
        column-gap: 1rem;
      }

      .input-bokare{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
    }
    .profil{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

      footer {
    display: flex;
    flex-direction: column;
    a {
        background: #BFDE8E;
        padding: .4rem;
        margin: .5rem;
        border: 0.2rem ;
        text-decoration: none;
        width: 2rem;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
        color: white;
        font-size: 18px;
        border-radius: 999rem;
        width: 25vw;
        display: block;


    .input-profil{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
    }  
    }
    
  }
 }
}
</style>
