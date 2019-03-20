<template>
    <main id="panel">

        <section class="topnav">
            <button class="logout" @click="logout">Logga ut</button>
            <h1>Admin Panel</h1> 
            <div class="add" @click="$router.push('/add')">Lägg till</div>
        </section>

        <!-- Filter Section -->
        <section class="selections">
            <div class="selectBtn">
            <label>Kommun</label>
            <br />
            <select v-model="kommun">
                <option default>Alla</option>
                <option v-for="kommun in kommuner" :value="kommun" :key="kommun">{{ kommun }}</option>
            </select>
            </div>

            <div class="selectBtn">
            <label>Ämne</label> 
            <br />
            <select v-model="amne">
                <option default>Alla</option>
                <option v-for="amne in amnen" :value="amne" :key="amne">{{ amne }}</option>
            </select>
            </div>

            <div class="selectBtn">
            <label>Årskurs</label> 
            <br />
            <select v-model="klass">
                <option default>Alla</option>
                <option v-for="klass in klasser" :key="klass" :value="klass">{{ klass }}</option>
            </select>
            </div>
            <a name="top"></a>
        </section>

        <router-view />

        <section class="list-active">   
            <h3>Tillgängliga</h3>
            <VikariekortAdmin class="card" v-for="(vikarie, index) in filterAll" :key="index" :vikarie="vikarie" />  
        </section>

        <section class="list-booked">
            <h3>Bokade</h3>
            <VikariekortAdmin class="card" v-for="(vikarie, index) in currentBookings" :key="index" :vikarie="vikarie" />  
        </section>
        

        <section class="list-finished">
            <Bokningskort />
        </section>

    </main>
</template>

<script>
import VikariekortAdmin from '../components/VikariekortAdmin'
import Bokningskort from '../components/Bokningskort'

export default {
    name: 'panel',
    components: {
        VikariekortAdmin,
        Bokningskort
    }, 
    data() {
        return {
            kommun: 'Alla',
            amne: 'Alla',
            klass: 'Alla'
        }
    },
    methods: {
        logout() {
            sessionStorage.clear();
            this.$router.push('/');
        }
    },
    computed: {
        filterAll() {
            return filterAmne(filterKommun(filterKlass(this.activeVikarier, this.klass), this.kommun), this.amne)
        },
        bookedVikarier() {
            return this.$store.getters.bookedVikarier;
        },
        activeVikarier() {
            return this.$store.getters.activeVikarier;
        },
        currentBookings() {
            return this.$store.getters.currentBookings;
        },
        oldBookings() {
            return this.$store.getters.oldBookings;
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

function filterKlass(list, klass) {
    if (klass == 'Alla') {
      return list;
    } else {
      return list.filter(vikarie => {
        return vikarie.klass.includes(klass)
      })
    }
}

function filterAmne(list, amne) { 
    if (amne == 'Alla') {
      return list;
    } else {
      return list.filter(vikarie => {
        return vikarie.amne.includes(amne)
      })
    }
}

function filterKommun(list, kommun) {
    if (kommun == 'Alla') {
      return list;
    } else {
      return list.filter(vikarie => {
        return vikarie.kommun.includes(kommun)
      })
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
    max-width: 480px;
    width: 100%;
    margin: auto;
    background: $lightpurple;
    flex-direction: column;

    .list-active, .list-booked {
        width: 90vw;
        max-width: 460px;
    }


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
        .add{
            margin: 10px;
            padding: 5px;
            // border: solid white 2px;
            border-radius: 15px;
            background: #F151C4;
            color: white;
            cursor: pointer;
            font-size: .8rem;

            &.logout {
                background: #222;
                border: none;
            } 
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
    .card {
        width: 100%;
    }
    
    .bookedCard {
        width: 100%;
        background: white;

        ul {
            li {
                list-style-type: none;
            }
        }
    }

    @media screen and (max-width: 500px) {
    
    .selections {
        select {
            width: 30vw;
        }
    }

    }
}


</style>
