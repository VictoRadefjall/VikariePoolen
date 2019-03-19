<template>
    <main id="confirm">
        <h1>Tack för din bokning på</h1> 
        <h2> {{vikarie.namn}} </h2>
      Var :  <h3> {{vikarie.kommun.toString()}}</h3> 
        <h3>{{vikarie.bokare}} </h3> 

    </main>
</template>

<script>
export default {
    name: 'confirm',
    computed: {
        vikarie() {
          return this.$store.getters.getVikarieById(this.$route.params.id);
        },
    },
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#confirm {
    
    color: white;
}

</style>
