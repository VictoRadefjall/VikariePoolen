<template>
  <main id="lista">
    <Vikariekort />
    
    <footer>
      <a @click="$router.push('/boka')">Boka</a> |
      <a @click="$router.push('/avboka')">Avboka</a> 
    </footer>

  </main>
</template>

<script>
import Vikariekort from '../components/Vikariekort'

export default {
  name: 'vikarielista',
  components: {
    Vikariekort
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

</style>
