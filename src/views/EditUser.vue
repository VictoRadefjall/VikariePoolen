<template>
    <main id="edit">
      <aside class="form">

        <h2>Redigera vikarie</h2>

        <div class="input-field">

            <section class="kommun">
                <label>Kommun</label>
                <ul>
                <li v-for="kommun in kommuner" :key="kommun">
                   {{ kommun }}
                <input type="checkbox" :value="kommun" v-model="vikarie.kommun"  >
                </li>
            </ul>
            </section>

            <section class="klass">
                <label>Årskurs</label>
                <ul>
                <li v-for="klass in klasser" :key="klass">
                    {{ klass }}
                <input type="checkbox" :value="klass" v-model="vikarie.klass">
                </li>
                </ul>
            </section>

            <section class="amne">
                <label>Ämnen</label>
                <ul>
                <li v-for="amne in amnen" :key="amne">
                    {{ amne }}
                <input type="checkbox" :value="amne" v-model="vikarie.amne">
                </li>
                </ul>
            </section>

            <input type="text" placeholder="Namn" class="namn pads"  v-model="vikarie.namn">
            <input type="text" placeholder="Kompetenser.." class="kompetens pads" v-model="vikarie.kompetens" /> 
        </div>

        <div class="btn pads">
          <button href="#" class="confirm" @click="$router.push('/panel')">Spara Ändringar</button>
          <button href="#" @click="$router.push('/panel')" class="back">Tillbaka </button>
        </div>

      </aside>
    </main>
</template>

<script>
export default {
    name: 'edituser',
    computed: {
       vikarie() {
          return this.$store.getters.getVikarieById(this.$route.params.id);
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
    methods: {
        handleClick(data){
            console.log(data)
            this.vikarie._id;
            this.$store.commit('updateVikarie', {id: this.vikarie._id, data: data})
        }
    }

}
</script>

<style lang="scss">
@import '../scss/main.scss';

#edit {
    @extend %center;
    flex-direction: column;
    width: 100vw;
    max-width: 410px;
    margin: auto;

    .form{

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
}

</style>
