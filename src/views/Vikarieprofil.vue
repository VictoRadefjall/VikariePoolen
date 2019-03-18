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
        <div class="status">
            <h2>Status:</h2>
          <!--  <p>{{ this.status }}</p> -->
        </div>

        </div>

      <section class="information">
          <article>

           <p class="vikarieInfo">
               Ämne:
           <span> 
             {{vikarie.amne.toString()}} <br>
            </span>
           </p> 
             
           <p class="vikarieInfo">
                Kommun: 
            <span>
                {{vikarie.kommun.toString()}} <br>
            </span> 
            </p>  

            <p class="vikarieInfo"> 
                Utbildning: 
                <span>
                    {{vikarie.klass.toString()}} <br>
                </span> 
            </p>     
        
          </article>
      </section>  
      
           <p class="input-bokare"> Bokare <input type="text" placeholder="Bokare"></p>
           <p class="input-bokare"> Plats <input type="text" placeholder="Plats"></p>

        
       <Kalender />

       <Modal btnText="Boka"
        :closeBtn="true" 
        class="boka"
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
        },
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
              ledig: true,
              datum: {
                dag: Number,
                manad: ''
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
      border-radius: 2rem;
      border:0.2rem solid grey;
      z-index: 1;
      position: fixed;
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
                height: 5rem;
                flex-direction: column;

                & span {
                    display: inherit;
                    flex-direction: column;
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
            width: 100%;
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
    .profil{
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
        

    .input-profil{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
    }  
    
  }
 }
}


</style>
