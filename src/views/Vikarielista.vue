<template>
  <main id="lista">
    <h1>Vikarielista</h1>

    <header>
      <input type="search" v-model="search" placeholder="Sök efter vikarie...">
      
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

      <div class="results" v-if="search.length > 0">
        <h3>Sökresultat</h3>
        <p v-if="filterAmne.length > 1">Visar {{ filterAmne.length }} vikarier</p>
        <p v-else>Visar 1 vikarie</p>
      </div>

    </header>

    <div class="vikarier">
      <router-view></router-view>
      <Vikariekort v-for="(vikarie, index) in filterAmne"
        :key="index"
        :vikarie="vikarie"/>
    </div>

  </main>
</template>

<script>
import Vikariekort from '../components/Vikariekort'

export default {
  name: 'vikarielista',
  data() {
    return {
      search: '',
      kommun: 'Alla',
      amne: 'Alla',
      klass: 'Alla'
    }
  },
  methods: {
  },
  components: {
    Vikariekort
  },
  computed: {
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
      } 
      if (this.search != '') {
        return this.$store.getters.vikarier.filter((vikarie) => {
          return vikarie.namn.toUpperCase().match(this.search.toUpperCase());
      })
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

    vikarier() {
      return this.$store.getters.vikarier;
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
  },
  beforeMount() {
    this.$store.dispatch('getVikarier')
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#lista {

  h1 {
    margin: 0;
    color: white;
  }

  header {
    color: white;
    height: 11rem;
    padding: 1rem;

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
    
    .selections {
      display: flex;
      padding-top: 1rem;
      justify-content: space-evenly;
      width: 40vw;
      margin: auto;

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
    .results {
      display: flex;
      padding: .75rem;
      width: 40vw;
      margin: auto;
      flex-direction: column;

      & :first-child() {
        margin: 0;
        color: white;
        @extend %center;
      }

      & p {
        display: flex;
        font-weight: 200;
        align-items: flex-end;
        justify-content: flex-end;
        color: #555;
      }
    }

    }

    @media screen and (max-width: 500px) {
      .selections, header input[type="search"] {
        width: 90vw;
      }
      header {
        .selections {
          & select {
            margin: .25rem;
            width: 30vw;
            font-size: .75em;
            background-position: 95% 50%;
            background-size: .75rem .75rem;
          }
        }
      }
      .results {
        width: 90vw;
        justify-content: center;
        align-items: center;

          & p {
            margin: .5rem;
            font-size: .75em;
          }
      }
    }

}

</style>
