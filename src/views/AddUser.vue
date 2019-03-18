<template>
    <main id="add">

      <aside class="form">

        <h2>Lägg till ny vikarie</h2>

        <div class="input-field">

            <section class="kommun">
                <label>Kommun</label>
                <ul>
                <li v-for="kommun in kommuner" :key="kommun">
                    {{ kommun }}
                <input type="checkbox" :value="kommun" v-model="nyVikarie.kommun">
                </li>
            </ul>
            </section>

            <section class="klass">
                <label>Årskurs</label>
                <ul>
                <li v-for="klass in klasser" :key="klass">
                    {{ klass }}
                <input type="checkbox" :value="klass" v-model="nyVikarie.klass">
                </li>
                </ul>
            </section>

            <section class="amne">
                <label>Ämnen</label>
                <ul>
                <li v-for="amne in amnen" :key="amne">
                    {{ amne }}
                <input type="checkbox" :value="amne" v-model="nyVikarie.amne">
                </li>
                </ul>
            </section>

            <input type="text" placeholder="Namn" class="namn pads"  v-model="nyVikarie.namn">
            <input type="text" placeholder="Kompetenser.." class="kompetens pads" v-model="nyVikarie.kompetens" /> 
        </div>

        <div class="btn pads">
          <button href="#" @click="skapaVikarie()" class="confirm">Lägg till</button>
          <button href="#" @click="$router.push('/panel')" class="back">tillbaka </button>
        </div>

      </aside>

    </main>
</template>

<script>
export default {
    name: 'adduser',
    data() {
        return {
            nyVikarie: {
                kommun: [],
                klass: [],
                amne: [],
                intressen: [],
                namn: '',
                kompetens: ''
            }
        }
    },
    methods: {
        async skapaVikarie() {
            this.$store.dispatch('skapaVikarie', this.nyVikarie);
            this.$router.push('/panel');
        }
    },
    computed: {
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
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#add {
    @extend %center;
    flex-direction: column;
    width: 100vw;
    max-width: 410px;
    margin: auto;

    .form { 

        .input-field {
            display: grid;
            margin: auto;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            grid-template-areas: 
            "namn"
            "klass"
            "amne"
            "kommun"
            "komp";

            .kommun{
                grid-area: kommun;

                li{
                    background: lightsalmon;
                }
            }
            .klass{
                grid-area: klass;
                
                li{
                    background: rgb(252, 201, 82);
                }    
            }
            .amne{grid-area: amne;}
            .namn{grid-area: namn;}
            .kompetens{grid-area: komp;}

            .pads{
                margin: 6px;
                padding: 10px;
                border-radius: 3px;
            }

            ul {
                flex-direction: row; 
                @extend %center;
                flex-wrap: wrap;
                padding: 0;
            }

            li {
                list-style-type: none;
                background: orange;
                border-radius: 5px;
                padding: .5rem;
                margin: .25rem;
                color: white;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }

            label {
                font-weight: bold;
            }
        }
    }

    .btn{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .confirm{
            background: purple;
            color: whitesmoke;  
            padding: 1rem;
            width:50%;
            text-transform: uppercase;
        }

        .back {
            background: orange;
            color: whitesmoke;  
            padding: 1rem;
            width:50%;
            text-transform: uppercase;
        }
        
    }


}
</style>
