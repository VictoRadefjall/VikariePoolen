<template>
    <main id="boka">
      <div class="profil">
        <button class="backBtn" @click="$router.push('/vikarielista')">
          tillbaka <br />
          &#8592;
        </button>
        <h1>Profil</h1>
        <h2> {{ vikarie.namn }} </h2>


    <div class="vikarie-bild-status">
        <div class="vikarie-bild">
          <img src="../assets/avatar.png" alt="avatar"/>
        </div>

        </div>

      <section class="information">
          <article>

            <div class="vikarieInfo">
              <label class="rubrik">Kommun:</label>
              <ul>
                <li v-for="kommun in vikarie.kommun" :key="kommun">
                  <p>{{ kommun }}</p>
                </li> 
              </ul>
            </div>  
            

           <div class="vikarieInfo">
              <label class="rubrik">Ämne:</label>
              <ul>
                <li v-for="amne in vikarie.amne" :key="amne"> 
                  {{ amne }} 
                </li>
              </ul>
           </div> 

            <div class="vikarieInfo"> 
              <label class="rubrik">Årskurs:</label>
              <ul>
                <li v-for="klass in vikarie.klass" :key="klass">
                  {{ klass }}
                </li> 
              </ul>
            </div>     
        
          </article>
      </section>  
      
           <p class="input-bokare"> Bokare <input type="text"  placeholder="Bokare" v-model="nyBokning.bokare"></p>
           <p class="input-bokare"> Plats <input type="text" v-model="nyBokning.skola" placeholder="Plats"></p>

       

       <Kalender />

    <!-- Boka vikarie -->
       <Modal btnText="Boka"
        @before-close="skapaBokning()"
        :closeBtn="true"
        class="boka-btn"
        closeBtnHTML="<span>X</span>"
        >
        <confirm/>
       </Modal>

<<<<<<< HEAD
     <!-- Avboka vikarie -->
         <Modal btnText="avboka"
        @before-close="removeVikarie()"
        :closeBtn="true"
        class="boka-btn"
        closeBtnHTML="<span>X</span>"
        >
        <Avboka/>
       </Modal>
     
=======
       <Modal btnText="Avboka"
       :closeBtn="true"
       closeBtnHTML="<span>X</span>"
        v-if="new Date(vikarie.datum.till).getUnixTime() > this.$store.state.today.toFixed()">
        <avboka/>
       </Modal>
>>>>>>> 0805c99ead8987ffb4c1b5237d87748840472952

      </div>
    </main>
</template>


<script>
import Modal from "@melmacaluso/vue-modal"
import confirm from '@/components/Confirm'
import Kalender from '@/components/Kalender'
import avboka from '@/components/Avboka'

export default {
    name: 'vikarieprofil',
    computed: {
        vikarie() {
          console.log(this.$store.getters.getVikarieById(this.$route.params.id));
          return this.$store.getters.getVikarieById(this.$route.params.id);
          
        }
    },
    // kan säga att den tvingar computed att köras
    watch: {
      vikarie: {
        immediate: true,
        handler(val){
          this.nyBokning.vikarie = val._id; 
        }
      }
    },
    components: {
        confirm,
        Modal,
        Kalender,
        avboka
        
    },
    data(){
        return {
              nyBokning: {
              vikarie: {},
              datum: {
                fran: null,
                till: null
              },
              bokare: '',
              skola: ''
            },
           
        }
    },
    methods: {
        async skapaBokning() {
          this.nyBokning.datum.fran = this.$children[0].StartDate;
          this.nyBokning.datum.till = this.$children[0].EndDate;

          this.$store.dispatch('skapaBokning', this.nyBokning);
          this.$store.dispatch('getBokningar')


        },
         
    }
}
</script>


<style lang="scss">
@import '../scss/main.scss';


   button {
      background-color: #BFDE8E;
       @extend %center;
       margin-bottom: 2rem;
       width: 20rem;
       border-radius: 999rem;
       height: 2rem;
       color: white;
       text-decoration: none;


     }

     .close {
         padding: 2rem;
         background: none;
         width: 1rem;
         font-size: 2rem;
         margin: auto;
         margin-bottom: 3px;
         border: none;

     }

    


    #boka {
      flex-direction: column;
      @extend %center;
      background: white;
      max-width: 420px;
      width: 100vw;
      height: auto;
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);

      .information{
        column-count: 3;
        column-gap: 1rem;
        column-rule-style: solid;
        column-rule-width: 1px;
        column-rule-color: #BFDE8E;
        width: 100%;
        text-overflow: hidden;
        

        article {
          display: flex;
          flex-direction: column;
          
            .vikarieInfo {
                display: flex;
                height: 10rem;
                flex-direction: column;
              
                & label {
                  color: $pink;
                  font-weight: 600;
                  font-size: 1.2em;

                }

                ul {
                  padding: .25rem;
                  margin: 0;
                  display: flex;
                  flex-direction: column;
                
                  li {
                    list-style-type: none;
                    color: none;
                  }
                }

            }

        }

      }
    .vikarie-bild-status{
        @extend %center;
        flex-direction: row;

    
    .vikarie-bild {
        flex: 1;
        width: 100%;
        height: auto;
        border-radius: 9999rem;
        background: linear-gradient(orange, white);
        display: flex;
        align-items: center;
        justify-content: center;
        

        img {
            height: auto;
            width: 10rem;
        }
      }
      .status{
          flex: 1;
      }
    }

      .information{
        column-count: 3;
        column-gap: 1rem;
      }

      .input-bokare{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
        margin: .25rem;
    }
    .profil {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        .backBtn {
          display: flex;
          flex-direction: column;
          width: inherit;
          font-size: 1em;
          padding: .5rem;
          border: 0;
          align-items: flex-end;
          cursor: pointer;
        }

        & h1 {
          color: $purple;
        }

    div {
            button .close {
                margin: auto;
                @extend %center;
            }

        }

    .input-profil {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
    }  
    
  }
 }


</style>