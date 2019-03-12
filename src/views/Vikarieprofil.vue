<template>
    <main id="boka">
      <div class="profil">
        <h1>Vikarieprofil</h1>
        <p> {{ vikarieId }} </p>

        <footer>
          <a>Avboka</a>
          <a>Boka</a>
        </footer>
      </div>

    </main>
</template>

<script>
export default {
    name: 'vikarieprofil',
    computed: {
        vikarieId() {
          return this.$store.getters.getVikarieById(this.$route.params.id);
        },
    }
    
}
</script>

<style lang="scss">
@import '../scss/main.scss';

</style>
