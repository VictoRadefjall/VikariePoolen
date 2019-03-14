<template>
    <main id="boka">
      <div class="profil">
        <h1>Vikarieprofil</h1>
        <h2> {{ vikarie.namn }} </h2>

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
      vikarie() {
        return this.$store.getters.getVikarieById(this.$route.params.id);
      },
    }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

</style>
