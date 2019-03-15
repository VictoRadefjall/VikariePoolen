<template>
    <main id="edit">
      <aside class="form">

        <h2>Redigera vikarie</h2>

        <p> {{ vikarie }} </p>

<!--
        <div class="input-field">
            <input type="text" placeholder="Kommun" class="kommun pads" :vikarie="vikarie" v-model="vikarie.kommun">
            <input type="text" placeholder="Klass" class="klass pads" :vikarie="vikarie" v-model="vikarie.klass">
            <input type="text" placeholder="Ämne" class="amne pads" :vikarie="vikarie" v-model="vikarie.amne">
            <input type="text" placeholder="Intressen" class="intressen pads" :vikarie="vikarie" v-model="vikarie.intressen">
            <input type="text" placeholder="Namn" class="namn pads" :vikarie="vikarie" v-model="vikarie.namn">
            <textarea placeholder="Kompetenser.." rows="4" cols="50" :vikarie="vikarie" class="kompetens pads" v-model="vikarie.kompetens" /> 
        </div>
-->

        <div class="btn pads">
          <button href="#"class="confirm">Redigera</button>
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
    },

}
</script>

<style lang="scss">
@import '../scss/main.scss';

#edit {
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
