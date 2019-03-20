<template>
    <main id="confirm">
        <h1>Tack för din bokning på</h1> 
        <h2> {{vikarie.namn}} </h2>
      Var :  <h3> {{vikarie.kommun.toString()}}</h3> 
      <!-- Bokare:  <h3>{{vikarie.bokare.toString()}} </h3> 
      När:    <h3> {{vikarie.datum.toStrig()}} </h3> -->

    </main>
</template>

<script>
export default {
    name: 'confirm',
    computed: {
        vikarie() {
          return this.$store.getters.getVikarieById(this.$route.params.id);
        },
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#confirm {
    
    color: white;
}

</style>
