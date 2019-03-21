<template>
    <main id="boka">

        <button class="backBtn" @click="$router.push('/vikarielista')">
          &#8592; tillbaka
        </button>

        <div class="name">
          <h1>Profil</h1>
          <h2> {{ vikarie.namn }} </h2>
        </div>


      <div class="vikarie-bild-status">
        <div class="bildContainer">
          <div class="vikarie-bild">
            <img src="../assets/avatar.png" alt="avatar"/>
          </div>
        </div>
      </div>

      <section class="information">
          <article>

          <!-- Kommuner -->
          <div class="vikarieInfo ">
            <label class="rubrik">Kommun:</label>
            <ul>
              <li v-for="kommun in vikarie.kommun" :key="kommun">
                {{ kommun }}
              </li> 
            </ul>
          </div>  
            
          <!-- Ämnen -->
          <div class="vikarieInfo ">
            <label class="rubrik">Ämne:</label>
            <ul>
              <li v-for="amne in vikarie.amne" :key="amne"> 
                {{ amne }} 
              </li>
            </ul>
          </div> 

          <!-- Årskurs -->
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

          <div class="bokning">

            <div class="who">
              <p class="input-bokare"> Skola: </p> 
              <p class="input-bokare"> Bokare: </p> 
            </div>

            <!-- Bokare och skola -->
            <div class="where">
              <input type="text" v-model="nyBokning.skola" placeholder="Till vilken skola..">
              <input type="text"  placeholder="Skriv in ditt namn.." v-model="nyBokning.bokare">
           </div>

           </div>

       

       <Kalender />

    <!-- Boka vikarie -->

       <Modal btnText="Boka"
        @before-close="skapaBokning()"
        v-if="!bokning || new Date(bokning.datum.till).getUnixTime() < this.$store.state.today.toFixed()"
        :closeBtn="true"
        class="boka-btn"
        closeBtnHTML="<span>X</span>"
        >
        <confirm/>
       </Modal>

     <!-- Avboka vikarie -->
      <Modal btnText="Avboka"
          @before-close="deleteBokning(bokning._id)"
          v-if="bokning && new Date(bokning.datum.till).getUnixTime() > this.$store.state.today.toFixed()"
          :closeBtn="true"
          class="boka-btn"
          closeBtnHTML="<span>Bekräfta avbokning</span>"
        >
        <avboka/>
      </Modal>
    
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
          return this.$store.getters.getVikarieById(this.$route.params.id);
        },
        bokning() {
          let avbokning = this.$store.state.bokningar.filter(bokning => bokning.vikarie._id.match(this.vikarie._id));
          return avbokning[0];
        },
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
        skapaBokning() {
          this.nyBokning.datum.fran = this.$children[0].StartDate;
          this.nyBokning.datum.till = this.$children[0].EndDate;

          this.$store.dispatch('skapaBokning', this.nyBokning);
          this.$store.dispatch('getBokningar')

        },
        async deleteBokning(bokning){
          this.$store.dispatch('deleteBokning', bokning)
        }  
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
      max-width: 500px;
      width: 100vw;
      z-index: 1;
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      overflow-y: scroll;
      margin: auto;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      border-top: solid rgb(166, 94, 180) 15px;

      .backBtn {
          background: none;
          width: 100%;
          font-size: 1em;
          padding: .5rem;
          border: 0;
          align-items: flex-end;
          cursor: pointer;
          margin: 0;
          color:hotpink;
      }

      .name {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 1.5rem;

        h1 {
          text-align: left;
          padding: 0;
          padding-left: 10px;
          color: $purple;
        }
        h2 {
          text-align: left;
          padding-left: 10px;
          margin: 0;
          margin-bottom: 1rem;
          font-weight: lighter;
          color: #073454;
        }
      }

      .vikarie-bild-status { 
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;

          .vikarie-bild {
            flex: 1;
            width: 100%;
            height: auto;
            border-radius: 9999rem;
            background: linear-gradient(orange, white);
            align-self: left;
            margin-left: 1rem;
          

            img {
              height: auto;
              width: 10rem;
            }

          }
          .status{
            p{
              color:grey;
              font-size: 1rem;
              margin: 0;
              text-transform: uppercase;
            }

          .redTxt {
            color: rgb(253, 119, 104);
           }
            
            h3{
              color: green;
            }
        }
      }
        
      .information{
        width: 100vw;
        text-overflow: hidden;
        margin-top: 2rem;
        margin-bottom: 2rem;
        height: auto;
        @extend %center;

        

        article {
          display: flex;
          flex-direction: row;
          border: solid grey 1px;
          border-radius: 8px;          
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);

          
            .vikarieInfo {
                display: flex;
                height: auto;
                flex-direction: column;
                padding: .5rem;
                margin: 10px;
                
              
                & label {
                  color: $pink;
                  font-weight: 600;
                  font-size: 1.2em;

                }

                ul {
                  padding: .25rem;
                  margin: 0;
                  display: flex;
                  height: 7.5rem;
                  flex-direction: column;
                  height: auto;
                
                  li {
                    list-style-type: none;
                    color: none;
                    font-size: .8rem;
                  }
                }

            }

        }

      }

      .bokning{
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

        .who{
          margin-right: .5rem;
          p {
          color:  rgb(94, 94, 94);
          text-align: left;
          }
        }
        .where {
          display: inherit;
          flex-direction: column;
        }
      }
      .btn{
        width: 80%;
        height: 3rem;
        background: hotpink;
        @extend %center;
        margin-bottom: 1rem;
        border-radius: 5px;
      }

      button {
       background-color: hotpink;
       color: white;
       text-decoration: none;
       border: none;
       font-size: 1rem;
       cursor: pointer;
     }

    .input-bokare {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bold;
        margin: .25rem;
    }
 }

</style>