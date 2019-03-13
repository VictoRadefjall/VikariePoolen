<template>
  <main id="lista">
    <h1>Vikarielista</h1>

    <div class="vikarier">
      <Vikariekort />
    </div>
    <footer>

    </footer>
    
  </main>
</template>

<script>
import Vikariekort from '../components/Vikariekort'

export default {
  name: 'vikarielista',
  components: {
    Vikariekort
  },
  methods: {

  },
  beforeMount() {
    this.$store.dispatch('getVikarier')
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#lista {
  background: purple;


}

</style>
