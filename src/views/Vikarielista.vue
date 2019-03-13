<template>
  <main id="lista">
    <h1>Vikarielista</h1>
    

    <header>
      <input type="search" v-model="search" placeholder="Sök efter vikarie...">

      <section class="selections">
        <div class="custom-select">
          <select @change="filterKommun" v-model="kommun">
            <option default>Kommun</option>
            <option v-for="kommun in kommuner" :value="kommun" :key="kommun">{{ kommun }}</option>
          </select>
        </div>

        <div class="selectBtn">
          <select>
            <option>Ämne</option>
            <option v-for="amne in amnen" :value="amne" :key="amne">{{ amne }}</option>
          </select>
        </div>

        <div class="selectBtn">
          <select>
            <option>Årskurs</option>
            <option v-for="klass in klasser" :key="klass" :value="klass">{{ klass }}</option>
          </select>
        </div>

      </section>

      <div class="results" v-if="search.length > 0">
        <h3>Sökresultat</h3>
        <p>Visar {{ vikarier.length }}st</p>
      </div>

    </header>

    <div class="vikarier">
      <Vikariekort />
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
      kommun: ''
    }
  },
  methods: {
    filterKommun() {
        this.vikarier.forEach((vikarie) => {
          if(this.kommun.match(vikarie.kommun)) {
            console.log(vikarie);
            console.log(this.kommun);
            return this.vikarier.filter(kommun => vikarie.kommun == kommun.kommun)
          }
        })
      }
  },
  components: {
    Vikariekort
  },
  computed: {
    searchVikarier() {
      return this.$store.getters.vikarier.filter((vikarie) => {
        return vikarie.namn.toUpperCase().match(this.search.toUpperCase());
      })
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
  color: #333;

  header {
    height: 10rem;

    input[type="search"] {
      background: #eee;
      border: none;
      width: 40vw;
      padding: .75rem;
    }

    .selections {
      display: flex;
      padding-top: .5rem;
      justify-content: space-evenly;
      width: 40vw;
      margin: auto;


      select {
        background: #eee;
        appearance: none;
        padding: 1rem;
        border-radius: 5px;
        height: 3rem;
        font-family: 'Times New Roman', Times, serif;
        border: none;
        box-shadow: 5px 3px 2px #777;

        & option {
          text-transform: lowercase;
        }

      }
    
      }
      .results {
        @extend %center;
        padding: .75rem;
        flex-direction: column;

        & :first-child() {
          margin: 0;
        }
    }

    }


    @media screen and (max-width: 500px) {
      .selections, header input[type="search"] {
        width: 90vw;
      }
      .selections {
        & select {
          margin: .25rem;
        }
      }
    }

}

</style>
