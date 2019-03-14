<template>
    <main id="add">

      <aside class="form">

        <h2>Lägg till ny vikarie</h2>

        <div class="input-field">
        <input type="text" placeholder="Kommun" class="kommun pads" v-model="nyVikarie.kommun">
        <input type="text" placeholder="Klass" class="klass pads"  v-model="nyVikarie.klass">
        <input type="text" placeholder="Ämne" class="amne pads"  v-model="nyVikarie.amne">
        <input type="text" placeholder="Intressen" class="intressen pads"  v-model="nyVikarie.intressen">
        <input type="text" placeholder="Namn" class="namn pads"  v-model="nyVikarie.namn">
        <textarea placeholder="Kompetenser.." rows="4" cols="50" class="kompetens pads" v-model="nyVikarie.kompetens" /> 
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
            this.$router.push('/panel')
        }
    } 
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#add {
    @extend %center;
    flex-direction: column;

    .input-field{
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        grid-template-areas: 
        "kommun"
        "klass"
        "amne"
        "intresse"
        "namn"
        "komp";

        .kommun{grid-area: kommun;}
        .klass{grid-area: klass;}
        .amne{grid-area: amne;}
        .intressen{grid-area: intresse;}
        .namn{grid-area: namn;}
        .kompetens{grid-area: komp;}

        .pads{
            margin: 6px;
            padding: 10px;
            border-radius: 3px;
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
