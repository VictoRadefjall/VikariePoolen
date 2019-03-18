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
          <img  src="../assets/avatar.png" alt="avatar"/>
        </div>

        </div>

      <section class="information">
          <article>

            <div class="vikarieInfo">
              <label class="rubrik">Kommun:</label>
              <ul>
                <li v-for="kommun in vikarie.kommun" :key="kommun">
                  {{ kommun }}
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
      
           <p class="input-bokare"> Bokare <input type="text" placeholder="Bokare"></p>
           <p class="input-bokare"> Plats <input type="text" placeholder="Plats"></p>

        
       <Kalender />

       <Modal btnText="Boka"
        :closeBtn="true" 
        closeBtnHTML="<span>X</span>"
        >
        <confirm/>
       </Modal>
     

      </div>
    </main>
</template>


<script>
import Modal from "@melmacaluso/vue-modal"
import confirm from '@/components/Confirm'
import Kalender from '@/components/Kalender'
//import avboka from '@/components/Avboka'

export default {
    name: 'vikarieprofil',
    computed: {
        vikarie() {
          return this.$store.getters.getVikarieById(this.$route.params.id);
        }
    },
    components: {
        confirm,
        Modal,
        Kalender
    },
    data(){
        return {
            active: false,
            nyBokning: {
              vikarie: {},
              datum: {
                fran: Date,
                till: Date
              },
              bokare: '',
              skola: ''
            }
        }
    },
    methods: {
        toggle(){
            console.log('It works!')
            this.active = !this.active;
        },
        async skapaBokning() {
          this.$store.dispatch('skapaBokning', this.nyBokning);
          this.$store.dispatch('getBokningar')
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
      height: auto;
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
        .boka {
            @extend %center;
            background: #BFDE8E;
            padding: .4rem;
            margin: .5rem;
            border: 0.2rem ;
            text-decoration: none;
            font-size: 1.25em;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            font-weight: bold;
            color: white;
            border-radius: 999rem;
            width: 25vw;

            &.close {
                margin: auto;
                width: auto;
            }

        }

    .input-profil {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
    }  
    
  }
 }
}


</style>
