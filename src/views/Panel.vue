<template>
    <main id="panel">

        <section class="topnav">
            <button class="logout" @click="logout">Logga ut</button>
            <h1>Admin Panel</h1>    
            <div class="add" @click="$router.push('/add')">Lägg till</div>
        </section>

        <!-- Filter Section -->
        <section class="selections">
            <input type="search" v-model="search" placeholder="Sök efter vikarie...">
        </section>

        <router-view />

        <section class="list-active">   
            <h3 class="category">Tillgängliga och bokade</h3>
            <VikariekortAdmin class="card" v-for="(vikarie, index) in filterVikarier" :key="index" :vikarie="vikarie" />  
        </section>
        

        <section class="list-finished">
            <h3 class="category">Avslutade bokningar</h3>
            <Bokningskort class="card" />
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
            search: ''
        }
    },
    methods: {
        logout() {
            sessionStorage.clear();
            this.$router.push('/');
        }
    },
    computed: { 
        filterVikarier() {
          return this.$store.state.vikarier.filter((vikarie) => {
            return vikarie.namn.toUpperCase().match(this.search.toUpperCase());
          })
        }
        },
        activeVikarier() {
            return this.$store.getters.activeVikarier;
        },
        vikarier() {
            return this.$store.getters.vikarier;
        },
        oldBookings() {
            return this.$store.getters.oldBookings;
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
    width: 100vw;
    margin: auto;
    background: $lightpurple;
    flex-direction: column;

    .list-active, .list-finished {
        width: 100vw;
        max-width: 480px;
    }

    .topnav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 480px;
        width: 100vw;
        margin: auto;
        height: 50px;
        background: #8729FF;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        .logout {
            border-radius: 3px;
            color: #fff;
            border: none;
            background: rgb(208, 105, 255);
            margin: 1rem;
            padding: 5px;
            cursor: pointer;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            &:hover {
                background: rgb(195, 0, 255);
            }
            
        }


        h1{
            color: whitesmoke;
            font-size: 1.5rem;
            margin: 0;
            padding: 10px;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        .add{
            margin: 1rem;
            padding: 8px;
            border-radius: 99999rem;
            background: #F151C4;
            color: white;
            cursor: pointer;
            font-size: .8rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

            &:hover {
                background: rgb(255, 0, 221);
            }
        }

    }

    .category {
        background: rgba(134, 41, 255, 0.63);
        text-align: left;
        padding: 8px;
        color: whitesmoke;
        max-width: 480px;
    }

    .selections {
      display: flex;
      padding-top: 1rem;
      justify-content: space-evenly;
      width: 100%;
      margin: auto;
      margin-bottom: 3rem;

    input[type="search"] {
      background-color: #eee;
      border: none;
      padding: 1rem 1.75rem;
      width: 40vw;
      border-radius: 3px;
      background-image: url('../assets/search.svg');
      background-repeat: no-repeat;
      background-position: 1% 50%;
      background-size: 1.25rem 1.25rem;
    }
    
    }


    @media screen and (max-width: 500px) {
        #panel {
            overflow: hidden;
    
        }

        .list-finished :nth-child(2) {
             width: 95vw;
             margin: auto;
        }

    
    .selections {
         input[type="search"] {
             width: 70vw;
             margin: auto;
         }
    }


    }
}


</style>
