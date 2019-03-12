<template>
  <div id="vikariekort">
    <section class="container" 
      v-for="(vikarie, index) in vikarier" 
      :key="index" 
      @click=" $router.push(`/vikarielista/${vikarie._id}`) ">
      
      <img src="../assets/avatar.png" width="100" />
      <h2> {{ vikarie.namn }} </h2>
      <ul>
        <li> <b>Kommuner:</b> {{ vikarie.kommun.toString() }} </li>
        <li> <b>Ämnen:</b> {{ vikarie.amne.toString() }} </li>
      </ul>

    </section>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'vikariekort',
  computed: {
    vikarier() {
      return this.$store.getters.vikarier
    },
    vikarieId() {
      return this.$store.getters.getVikarieById(this.$route.params.id);
    },
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#vikariekort {
  background: #ccc;

  .container {
    padding: 2rem;
    @extend %center;

    h2 {
      margin: .5rem;
    }

    ul {
      li {
        list-style-type: none;
      }
    }
  }
}



</style>
