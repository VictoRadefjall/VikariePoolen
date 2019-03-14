<template>
    <main id="add">

      <aside class="form">

        <h2>Lägg till ny vikarie</h2>
        <input type="text" placeholder="Kommun" class="kommun" v-model="nyVikarie.kommun">
        <input type="text" placeholder="Klass" class="klass"  v-model="nyVikarie.klass">
        <input type="text" placeholder="Ämne" class="amne"  v-model="nyVikarie.amne">
        <input type="text" placeholder="Intressen" class="intressen"  v-model="nyVikarie.intressen">
        <input type="text" placeholder="Namn" class="namn"  v-model="nyVikarie.namn">
        <textarea placeholder="Kompetenser" rows="4" cols="50" class="kompetens" v-model="nyVikarie.kompetens" /> 
        
        <div class="btn">
          <a href="#" @click="skapaVikarie()" >Lägg till</a>
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

</style>
