<template>
    <main id="panel">

        <section class="topnav">
            <h1>Admin Panel</h1> 
            <button @click="$router.push('/add')">Lägg till</button>
        </section>


        <!-- Filter Section -->
        <section class="selections">
            <div class="selectBtn">
            <label>Kommun</label>
            <br />
            <select v-model="kommun">
                <option v-for="kommun in kommuner" :value="kommun" :key="kommun">{{ kommun }}</option>
            </select>
            </div>

            <div class="selectBtn">
            <label>Ämne</label> 
            <br />
            <select v-model="amne">
                <option v-for="amne in amnen" :value="amne" :key="amne">{{ amne }}</option>
            </select>
            </div>

            <div class="selectBtn">
            <label>Årskurs</label> 
            <br />
            <select v-model="klass">
                <option v-for="klass in klasser" :key="klass" :value="klass">{{ klass }}</option>
            </select>
            </div>
        </section>

        <router-view />

        <section class="list-active">   

        <VikariekortAdmin class="card" v-for="(vikarie, index) in vikarier" :key="index" :vikarie="vikarie" />  

        </section>

    </main>
</template>

<script>
import VikariekortAdmin from '../components/VikariekortAdmin'

export default {
    name: 'panel',
    components: {
        VikariekortAdmin
    }, 
    computed: {
        vikarier() {
            return this.$store.getters.vikarier;
        },

        // Filter kommuner
        filterKommun() {
        if (this.kommun == 'Alla') {
            return this.vikarier;
        } else {
            return this.vikarier.filter(vikarie => {
            return vikarie.kommun.includes(this.kommun)
            })
        }
        },

        // Filter ämnen
        filterAmne() {
        if (this.amne == 'Alla') {
            return this.vikarier;
        } else {
            return this.vikarier.filter(vikarie => {
            return vikarie.amne.includes(this.amne)
            })
        }
        },

        // Filter klasser
        filterKlass() {
        if (this.klass == 'Alla') {
            return this.vikarier;
        } else {
            return this.vikarier.filter(vikarie => {
            return vikarie.klass.includes(this.klass)
            })
        }
        },
            kommuner() {
      return this.$store.state.kommuner;
    },
    amnen() {
      return this.$store.state.amnen;
    },
    klasser() {
      return this.$store.state.klasser;
    }
    } 
}

</script>

<style lang="scss">
@import '../scss/main.scss';


#panel {
    margin: 10px auto 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 460px;
    width: 100%;
    margin: auto;
    background: $lightpurple;
    flex-direction: column;


    .topnav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: auto;
        height: 50px;
        background: #8729FF;
        border-radius: 5px;

        h1{
            color: whitesmoke;
            font-size: 1.5rem;
            margin: 0;
            padding: 10px;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        button{
            margin: 10px;
            padding: 5px;
            border: solid white 2px;
            border-radius: 5px;
            background: none;
            color: white;
        }
    }

    .selections {
      display: flex;
      padding-top: 1rem;
      justify-content: space-evenly;
      width: 100%;
      margin: auto;
      margin-bottom: 3rem;

      select {
        background: #eee;
        appearance: none;
        width: 10vw;
        padding: .35rem;
        border-radius: 5px;
        font-size: .8em;
        height: 3rem;
        border: none;
        box-shadow: 5px 3px 2px #777;
        background-image: url('../assets/arrow.svg');
        background-repeat: no-repeat;
        background-position: 95% 50%;
        background-size: 1rem 1rem;
      }    
    
    }
    .card{
        width: 100%;
    }


}


</style>
